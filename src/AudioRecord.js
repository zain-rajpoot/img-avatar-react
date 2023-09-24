import * as React from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

export default function AudioRecord() {
    const addAudioElement = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
    };

    return (
        <div>
            <AudioRecorder onRecordingComplete={addAudioElement} />
            <br />
        </div>
    );
}
