import json
import os

import gradio as gr
import numpy as np
from dotenv import load_dotenv
from fastrtc import (
    AdditionalOutputs,
    CloseStream,
    ReplyOnPause,
    Stream,
    get_current_context,
    get_stt_model,
    get_tts_model,
)
from numpy.typing import NDArray
from openai import OpenAI

load_dotenv()

tts = get_tts_model()
stt = get_stt_model()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


conversations: dict[str, list[dict]] = {}

FUNCTIONS = [
    {
        "name": "verify_birthday",
        "description": "Use this function to verify the user has provided their correct birthday.",
        "parameters": {
            "type": "object",
            "properties": {
                "birthday": {
                    "type": "string",
                    "description": "The user's birthdate, including the year. The user can provide it in any format, but convert it to YYYY-MM-DD format to call this function.",
                }
            },
        },
    },
    {
        "name": "list_prescriptions",
        "description": "Once the user has provided a list of their prescription medications, call this function.",
        "parameters": {
            "type": "object",
            "properties": {
                "prescriptions": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "medication": {
                                "type": "string",
                                "description": "The medication's name",
                            },
                            "dosage": {
                                "type": "string",
                                "description": "The prescription's dosage",
                            },
                        },
                    },
                }
            },
        },
    },
    {
        "name": "list_allergies",
        "description": "Once the user has provided a list of their allergies, call this function.",
        "parameters": {
            "type": "object",
            "properties": {
                "allergies": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string",
                                "description": "What the user is allergic to",
                            }
                        },
                    },
                }
            },
        },
    },
    {
        "name": "list_conditions",
        "description": "Once the user has provided a list of their medical conditions, call this function.",
        "parameters": {
            "type": "object",
            "properties": {
                "conditions": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string",
                                "description": "The user's medical condition",
                            }
                        },
                    },
                }
            },
        },
    },
    {
        "name": "list_visit_reasons",
        "description": "Once the user has provided a list of the reasons they are visiting a doctor today, call this function.",
        "parameters": {
            "type": "object",
            "properties": {
                "visit_reasons": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string",
                                "description": "The user's reason for visiting the doctor",
                            }
                        },
                    },
                }
            },
        },
    },
]


def create_system_message():
    system_message = [
        {
            "role": "system",
            "content": "You are Jessica, an agent for a company called Tri-County Health Services. Your job is to collect important information from the user before their doctor visit. You're talking to Freddy. You should address the user by their first name and be polite and professional. You're not a medical professional, so you shouldn't provide any advice. Keep your responses short. Your job is to collect information to give to a doctor. Don't make assumptions about what values to plug into functions. Ask for clarification if a user response is ambiguous. Start by introducing yourself. Then, ask the user to confirm their identity by telling you their birthday, including the year. When they answer with their birthday, call the verify_birthday function.",
        }
    ]
    return system_message


def start_up():
    stream_id = get_current_context().webrtc_id
    conversation = create_system_message()
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=conversation,  # type: ignore
    )
    llm_response = response.choices[0].message.content
    assert llm_response is not None
    yield from tts.stream_tts_sync(llm_response)
    llm_dict = {"role": "assistant", "content": llm_response}
    yield AdditionalOutputs(llm_dict, conversation)
    conversation.append(llm_dict)
    conversations[stream_id] = conversation


def response(audio: tuple[int, NDArray[np.int16]]):
    stream_id = get_current_context().webrtc_id
    if stream_id not in conversations:
        conversations[stream_id] = create_system_message()
    message = stt.stt(audio)
    print("message", message)
    conversation = conversations[stream_id]
    conversation.append({"role": "user", "content": message})
    yield AdditionalOutputs({"role": "user", "content": message})
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=conversation,  # type: ignore
        functions=FUNCTIONS,  # type: ignore
        function_call="auto",
    )
    should_end = False
    response_message = response.choices[0].message
    if response_message.function_call:
        function_name = response_message.function_call.name
        function_args = json.loads(response_message.function_call.arguments)
        yield AdditionalOutputs(
            {
                "role": "assistant",
                "content": f"Function call: {function_name} with arguments: {function_args}",
            }
        )
        if function_name == "verify_birthday":
            if function_args.get("birthday") == "1983-01-01":
                yield AdditionalOutputs(
                    {
                        "role": "assistant",
                        "content": "Successfully verified birthday",
                    }
                )
                conversation.append(response_message.model_dump())
                conversation.append(
                    {
                        "role": "function",
                        "name": function_name,
                        "content": "Success",
                    }
                )
                conversation.append(
                    {
                        "role": "system",
                        "content": "Next, thank the user for confirming their identity, then ask the user to list their current prescriptions if they have any. Each prescription needs to have a medication name and a dosage. Do not call the list_prescriptions function with any unknown dosages. Once they have listed their prescriptions or confirmed they don't have any, call the list_prescriptions function.",
                    }
                )
            else:
                yield AdditionalOutputs(
                    {
                        "role": "assistant",
                        "content": "Failed to verify birthday",
                    }
                )
                conversation.append(response_message.model_dump())
                conversation.append(
                    {
                        "role": "function",
                        "name": function_name,
                        "content": "Failed",
                    }
                )
                conversation.append(
                    {
                        "role": "system",
                        "content": "The user provided an incorrect birthday. Ask them for their birthday again. When they answer, call the verify_birthday function.",
                    }
                )
        elif function_name == "list_prescriptions":
            yield AdditionalOutputs(
                {
                    "role": "assistant",
                    "content": "Successfully listed prescriptions",
                }
            )
            conversation.append(response_message.model_dump())
            conversation.append(
                {
                    "role": "function",
                    "name": function_name,
                    "content": "Success",
                }
            )
            conversation.append(
                {
                    "role": "system",
                    "content": "Next, ask the user if they have any allergies. Once they have listed their allergies or confirmed they don't have any, call the list_allergies function.",
                }
            )
        elif function_name == "list_allergies":
            yield AdditionalOutputs(
                {
                    "role": "assistant",
                    "content": "Successfully listed allergies",
                }
            )
            conversation.append(response_message.model_dump())
            conversation.append(
                {
                    "role": "function",
                    "name": function_name,
                    "content": "Success",
                }
            )
            conversation.append(
                {
                    "role": "system",
                    "content": "Now ask the user if they have any medical conditions the doctor should know about. Once they've answered the question, call the list_conditions function.",
                }
            )
        elif function_name == "list_conditions":
            yield AdditionalOutputs(
                {
                    "role": "assistant",
                    "content": "Successfully listed conditions",
                }
            )
            conversation.append(response_message.model_dump())
            conversation.append(
                {
                    "role": "function",
                    "name": function_name,
                    "content": "Success",
                }
            )
            conversation.append(
                {
                    "role": "system",
                    "content": "Finally, ask the user the reason for their doctor visit today. Once they answer, call the list_visit_reasons function.",
                }
            )
        elif function_name == "list_visit_reasons":
            yield AdditionalOutputs(
                {
                    "role": "assistant",
                    "content": "Successfully listed visit reasons",
                }
            )
            conversation.append(response_message.model_dump())
            conversation.append(
                {
                    "role": "function",
                    "name": function_name,
                    "content": "Success",
                }
            )
            conversation.append(
                {
                    "role": "system",
                    "content": "Now, thank the user and end the conversation.",
                }
            )
            should_end = True
        llm_response = (
            client.chat.completions.create(
                model="gpt-4o",
                messages=conversation,  # type: ignore
                functions=FUNCTIONS,  # type: ignore
                function_call="auto",
            )
            .choices[0]
            .message.content
        )
    else:
        llm_response = response.choices[0].message.content
    assert llm_response is not None
    yield from tts.stream_tts_sync(llm_response)
    llm_dict = {"role": "assistant", "content": llm_response}
    yield AdditionalOutputs(llm_dict, conversation)
    conversation.append(llm_dict)
    if should_end:
        yield CloseStream()


def update_chatbot(
    chatbot: list[dict],
    conversation_old,
    response: dict,
    conversation: list[dict] | None = None,
):
    chatbot.append(response)
    return chatbot, conversation


chatbot = gr.Chatbot(type="messages")


stream = Stream(
    ReplyOnPause(response, start_up),
    mode="send-receive",
    modality="audio",
    additional_inputs=[chatbot],
    additional_outputs=[chatbot, gr.JSON(label="Conversation")],
    additional_outputs_handler=update_chatbot,
)


if __name__ == "__main__":
    if (mode := os.getenv("MODE")) == "UI":
        stream.ui.launch(server_port=7860)
    elif mode == "PHONE":
        stream.fastphone(host="0.0.0.0", port=7860)
    else:
        stream.ui.launch(server_port=7860)
