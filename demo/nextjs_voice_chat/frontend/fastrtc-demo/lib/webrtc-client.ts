interface WebRTCClientOptions {
    onConnected?: () => void;
    onDisconnected?: () => void;
    onMessage?: (message: any) => void;
    onAudioStream?: (stream: MediaStream) => void;
    onAudioLevel?: (level: number) => void;
}

export class WebRTCClient {
    private peerConnection: RTCPeerConnection | null = null;
    private mediaStream: MediaStream | null = null;
    private dataChannel: RTCDataChannel | null = null;
    private options: WebRTCClientOptions;
    private audioContext: AudioContext | null = null;
    private analyser: AnalyserNode | null = null;
    private dataArray: Uint8Array | null = null;
    private animationFrameId: number | null = null;

    constructor(options: WebRTCClientOptions = {}) {
        this.options = options;
    }

    async connect() {
        try {
            this.peerConnection = new RTCPeerConnection();
            
            // Get user media
            try {
                this.mediaStream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
            } catch (mediaError: any) {
                console.error('Media error:', mediaError);
                if (mediaError.name === 'NotAllowedError') {
                    throw new Error('Microphone access denied. Please allow microphone access and try again.');
                } else if (mediaError.name === 'NotFoundError') {
                    throw new Error('No microphone detected. Please connect a microphone and try again.');
                } else {
                    throw mediaError;
                }
            }
            
            this.setupAudioAnalysis();
            
            this.mediaStream.getTracks().forEach(track => {
                if (this.peerConnection) {
                    this.peerConnection.addTrack(track, this.mediaStream!);
                }
            });
            
            this.peerConnection.addEventListener('track', (event) => {
                if (this.options.onAudioStream) {
                    this.options.onAudioStream(event.streams[0]);
                }
            });
            
            this.dataChannel = this.peerConnection.createDataChannel('text');
            
            this.dataChannel.addEventListener('message', (event) => {
                try {
                    const message = JSON.parse(event.data);
                    console.log('Received message:', message);
                    
                    if (this.options.onMessage) {
                        this.options.onMessage(message);
                    }
                } catch (error) {
                    console.error('Error parsing message:', error);
                }
            });
            
            // Create and send offer
            const offer = await this.peerConnection.createOffer();
            await this.peerConnection.setLocalDescription(offer);
            
            // Use same-origin request to avoid CORS preflight
            const response = await fetch('http://localhost:8000/webrtc/offer', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                mode: 'cors', // Explicitly set CORS mode
                credentials: 'same-origin',
                body: JSON.stringify({
                    sdp: offer.sdp,
                    type: offer.type,
                    webrtc_id: Math.random().toString(36).substring(7)
                })
            });
            
            const serverResponse = await response.json();
            await this.peerConnection.setRemoteDescription(serverResponse);
            
            if (this.options.onConnected) {
                this.options.onConnected();
            }
        } catch (error) {
            console.error('Error connecting:', error);
            this.disconnect();
            throw error;
        }
    }

    private setupAudioAnalysis() {
        if (!this.mediaStream) return;
        
        try {
            this.audioContext = new AudioContext();
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;
            
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);
            source.connect(this.analyser);
            
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            
            this.startAnalysis();
        } catch (error) {
            console.error('Error setting up audio analysis:', error);
        }
    }

    private startAnalysis() {
        if (!this.analyser || !this.dataArray || !this.options.onAudioLevel) return;
        
        // Add throttling to prevent too many updates
        let lastUpdateTime = 0;
        const throttleInterval = 100; // Only update every 100ms
        
        const analyze = () => {
            this.analyser!.getByteFrequencyData(this.dataArray!);
            
            const currentTime = Date.now();
            // Only update if enough time has passed since last update
            if (currentTime - lastUpdateTime > throttleInterval) {
                // Calculate average volume level (0-1)
                let sum = 0;
                for (let i = 0; i < this.dataArray!.length; i++) {
                    sum += this.dataArray![i];
                }
                const average = sum / this.dataArray!.length / 255;
                
                this.options.onAudioLevel!(average);
                lastUpdateTime = currentTime;
            }
            
            this.animationFrameId = requestAnimationFrame(analyze);
        };
        
        this.animationFrameId = requestAnimationFrame(analyze);
    }

    private stopAnalysis() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        
        this.analyser = null;
        this.dataArray = null;
    }

    disconnect() {
        this.stopAnalysis();
        
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach(track => track.stop());
            this.mediaStream = null;
        }
        
        if (this.peerConnection) {
            this.peerConnection.close();
            this.peerConnection = null;
        }
        
        this.dataChannel = null;
        
        if (this.options.onDisconnected) {
            this.options.onDisconnected();
        }
    }
} 