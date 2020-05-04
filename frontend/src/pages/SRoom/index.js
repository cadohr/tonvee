import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import socket from '~/services/socket';

import { ensureMediaPermissions } from '~/utils';

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
  const isSpeaker = useSelector(
    (state) => state.user.profile.type === 'speaker',
  );

  const [, setDevices] = useState([]);
  // const [audioSource, setAudioSource] = useState();
  // const [videoSource, setVideoSource] = useState();

  function getDevices() {
    return ensureMediaPermissions().then(() =>
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => setDevices(devices)),
    );
  }

  useEffect(() => {
    const videoRefCurrent = videoRef.current;

    navigator.mediaDevices
      .getUserMedia({
        // audio: { deviceId: audioSource },
        audio: true,
        video: true,
        // video: { deviceId: videoSource },
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        socket.emit('speaker');
      });

    return () => {
      navigator.mediaDevices.removeEventListener('devicechange', getDevices);

      let stream = videoRefCurrent.srcObject;

      stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const peerConnections = [];

  useEffect(() => {
    if (isSpeaker) {
      getDevices();

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

  function handleClick() {
    navigator.mediaDevices
      .getUserMedia({
        // audio: { deviceId: audioSource },
        audio: true,
        video: true,
        // video: { deviceId: videoSource },
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        socket.emit('speaker');
      });
  }

  // function handleChange(e, type) {
  //   if (type === 'audioinput') {
  //     setAudioSource(e.target.value);
  //   } else if (type === 'videoinput') {
  //     setVideoSource(e.target.value);
  //   }
  // }

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <Container>
      {isSpeaker && (
        <>
          {/* <section>
            <label htmlFor="audioSource">Audio source: </label>
            <select
              id="audioSource"
              onChange={(e) => handleChange(e, 'audioinput')}
            >
              {devices.map((d) => {
                if (d.kind === 'audioinput') {
                  return <option key={d.label}>{d.label}</option>;
                }
              })}
            </select>
          </section>

          <section>
            <label htmlFor="videoSource">Video source: </label>
            <select
              id="videoSource"
              onChange={(e) => handleChange(e, 'videoinput')}
            >
              {devices.map((d) => {
                if (d.kind === 'videoinput') {
                  return <option key={d.label}>{d.label}</option>;
                }
              })}
            </select>
          </section> */}

          {/* <section>
            <button onClick={handleClick}>Start Stream</button>
          </section> */}
        </>
      )}
      <Video
        playsInline
        autoPlay
        onCanPlay={handleCanPlay}
        muted={isSpeaker}
        ref={videoRef}
      />
    </Container>
  );
}
