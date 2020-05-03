import { useState, useEffect } from 'react';

export default function useUserMedia() {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function startStream() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });

      setMediaStream(stream);
    }

    startStream();

    return () => {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, [mediaStream]);
}
