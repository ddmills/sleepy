import Manager from './Manager';

export default class ScreenCaptureManager extends Manager {
    #rec;
    #isRecording = false;

    get isRecording() {
        return this.#isRecording;
    }

    startCapture(duration = null) {
        if (this.isRecording) {
            return;
        }

        this.#isRecording = true;

        console.log('START CAPTURE');

        const chunks = []; // here we will store our recorded media chunks (Blobs)
        const stream = this.game.renderer.canvas.captureStream(); // grab our canvas MediaStream
        this.#rec = new MediaRecorder(stream); // init the recorder
        this.#rec.ondataavailable = (e) => chunks.push(e.data);
        // only when the recorder stops, we construct a complete Blob from all the chunks
        this.#rec.onstop = (e) =>
            this.exportVideo(new Blob(chunks, { type: 'video/webm' }));

        this.#rec.start();

        if (duration) {
            setTimeout(() => this.endCapture(), duration);
        }
    }

    endCapture() {
        if (!this.isRecording) {
            return;
        }

        console.log('END CAPTURE');

        this.#rec.stop();
    }

    exportVideo(blob) {
        const vid = document.createElement('video');
        vid.src = URL.createObjectURL(blob);
        vid.controls = true;
        document.body.appendChild(vid);
        const a = document.createElement('a');
        a.download = 'myvid.webm';
        a.href = vid.src;
        a.textContent = 'download the video';
        document.body.appendChild(a);
    }
}
