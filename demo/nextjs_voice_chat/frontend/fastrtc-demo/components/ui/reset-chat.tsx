"use client"

import { Trash } from "lucide-react"

export function ResetChat() {
    return (
        <button
            className="w-10 h-10 rounded-md flex items-center justify-center transition-colors relative overflow-hidden bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
            aria-label="Reset chat"
            onClick={() => fetch("http://localhost:8000/reset")}
        >
            <div className="relative z-10">
                <Trash className="h-5 w-5 text-black/70 dark:text-white/70" />
            </div>
    </button>
    )
}

