import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import socket from '~/services/socket';

import { Container, Video } from './styles';

const config = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302'],
    },
  ],
};

export default function Room() {
  const videoRef = useRef(null);
  const shareRef = useRef(null);
  const isSpeaker = useSelector(
    (state) => state.user.profile.type === 'speaker',
  );

  function handleShareScreen() {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'screen',
            maxWidth: 1280,
            maxHeight: 720,
          },
        },
      })
      .then((stream) => (shareRef.current.srcObject = stream))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const videoRefCurrent = videoRef.current;

    // navigator.mediaDevices
    //   .getUserMedia({
    //     audio: true,
    //     video: true,
    //   })
    //   .then((stream) => {
    //     videoRef.current.srcObject = stream;
    //     socket.emit('speaker');
    //   });

    return () => {
      let stream = videoRefCurrent.srcObject;

      stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const peerConnections = [];

  useEffect(() => {
    if (isSpeaker) {
      socket.on('viewer', (id) => {
        const pc = new RTCPeerConnection(config);
        peerConnections[id] = pc;

        let stream = videoRef.current.srcObject;

        stream.getTracks().forEach((track) => {
          pc.addTrack(track, stream);
        });

        pc.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit('candidate', id, event.candidate);
          }
        };

        pc.createOffer()
          .then((sdp) => pc.setLocalDescription(sdp))
          .then(() => {
            socket.emit('offer', id, pc.localDescription);
          });
      });

      socket.on('answer', (id, description) => {
        peerConnections[id].setRemoteDescription(description);
      });

      socket.on('candidate', (id, candidate) => {
        peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      });

      socket.on('disconnectPeer', (id) => {
        peerConnections[id].close();
      });
    }

    return () => {
      socket.close();
    };
  }, [isSpeaker, peerConnections]);

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <Container>
      <Video
        playsInline
        autoPlay
        onCanPlay={handleCanPlay}
        muted={true}
        ref={videoRef}
      />

      <video ref={shareRef} />
      <button onClick={handleShareScreen}>Share Screen</button>
    </Container>
  );
}
