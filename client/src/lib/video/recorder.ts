// Browser-based tab recording using getDisplayMedia + MediaRecorder

export type RecorderState = 'idle' | 'requesting' | 'recording' | 'stopped' | 'error';

export type StateChangeListener = (state: RecorderState) => void;

function pickMimeType(): string {
  const candidates = [
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm;codecs=vp8',
    'video/webm',
  ];
  for (const mime of candidates) {
    if (MediaRecorder.isTypeSupported(mime)) return mime;
  }
  return 'video/webm';
}

export class TabRecorder {
  private state: RecorderState = 'idle';
  private recorder: MediaRecorder | null = null;
  private stream: MediaStream | null = null;
  private chunks: Blob[] = [];
  private listeners = new Set<StateChangeListener>();

  getState(): RecorderState {
    return this.state;
  }

  onStateChange(fn: StateChangeListener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private setState(next: RecorderState) {
    this.state = next;
    this.listeners.forEach(fn => fn(next));
  }

  async start(): Promise<void> {
    if (this.state === 'recording') return;

    this.setState('requesting');
    this.chunks = [];

    try {
      this.stream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 60 },
        audio: false,
        // @ts-expect-error -- preferCurrentTab is Chrome 109+
        preferCurrentTab: true,
      });
    } catch {
      this.setState('idle');
      throw new Error('Screen share denied');
    }

    // Handle user clicking "Stop sharing" in the browser chrome
    const videoTrack = this.stream.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.onended = () => this.stop();
    }

    const mimeType = pickMimeType();
    this.recorder = new MediaRecorder(this.stream, {
      mimeType,
      videoBitsPerSecond: 8_000_000,
    });

    this.recorder.ondataavailable = (e) => {
      if (e.data.size > 0) this.chunks.push(e.data);
    };

    this.recorder.onstop = () => {
      this.cleanup();
      this.setState('stopped');
    };

    this.recorder.onerror = () => {
      this.cleanup();
      this.setState('error');
    };

    this.recorder.start(1000); // collect data every 1s
    this.setState('recording');
  }

  stop(): void {
    if (this.recorder && this.recorder.state !== 'inactive') {
      this.recorder.stop();
    } else {
      this.cleanup();
      this.setState('stopped');
    }
  }

  getBlob(): Blob | null {
    if (this.chunks.length === 0) return null;
    return new Blob(this.chunks, { type: 'video/webm' });
  }

  downloadWebM(filename = 'somansa-recording.webm'): void {
    const blob = this.getBlob();
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  reset(): void {
    this.cleanup();
    this.chunks = [];
    this.setState('idle');
  }

  private cleanup() {
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    this.recorder = null;
  }
}
