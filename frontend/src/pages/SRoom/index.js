import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import socket from '~/services/socket';

import { ensureMediaPermissions } from '~/utils';

import useUserMedia from '~/hooks/useUserMedia';

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

  const mediaStream = useUserMedia();
  console.tron.log(mediaStream);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  const [sstream, setSstream] = useState({});
  const [devices, setDevices] = useState([]);
  const [audioSource, setAudioSource] = useState();
  const [videoSource, setVideoSource] = useState();

  const [peerConnections, setPeerConnections] = useState([]);
  const [peerConnection, setPeerConnection] = useState({});

  function getDevices() {
    return ensureMediaPermissions().then(() =>
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => setDevices(devices)),
    );
  }

  // useEffect(() => {
  //   return () => {
  //     navigator.mediaDevices.removeEventListener('devicechange', getDevices);

  //     stream.getTracks().forEach((track) => track.stop());
  //   };
  // }, []);

  // useEffect(() => {}, []);

  useEffect(() => {
    if (isSpeaker) {
      getDevices();
      console.tron.log('is speaker');

      socket.on('viewer', (id) => {
        setPeerConnection({ id, peer: new RTCPeerConnection(config) });
        setPeerConnections((prevPeerConnections) => [
          ...prevPeerConnections,
          peerConnection,
        ]);

        // let stream = videoRef.current.srcObject;
        console.tron.log('sstream:', sstream);
        let teste = videoRef.current.srcObject;
        console.tron.log(
          teste.getTracks().forEach((track) => console.tron.log(track)),
        );
        // stream
        //   .getTracks()
        //   .forEach((track) => peerConnection.peer.addTrack(track, stream));

        // peerConnection.peer.onicecandidate = (event) => {
        //   if (event.candidate) {
        //     socket.emit('candidate', id, event.candidate);
        //   }
        // };

        // peerConnection.peer
        //   .createOffer()
        //   .then((sdp) => peerConnection.peer.setLocalDescription(sdp))
        //   .then(() => {
        //     socket.emit('offer', id, peerConnection.peer.localDescription);
        //   });
      });

      socket.on('answer', (id, description) => {
        peerConnections.forEach((p) => {
          if (p.id === id) {
            p.peer.setRemoteDescription(description);
          }
        });
        peerConnections[id].setRemoteDescription(description);
      });

      socket.on('candidate', (id, candidate) => {
        peerConnections.forEach((p) => {
          if (p.id === id) {
            p.peer.addIceCandidate(new RTCIceCandidate(candidate));
          }
        });
      });

      socket.on('disconnectPeer', (id) => {
        peerConnections.forEach((p) => {
          if (p.id === id) {
            p.peer.close();
          }
        });

        peerConnections.filter((p) => p.id !== id);
      });
    }

    return () => {
      socket.close();
    };
  }, [isSpeaker]);

  function handleClick() {
    // const test = ensureMediaPermissions();
    // console.tron.log(test);
    // navigator.mediaDevices
    //   .getUserMedia({
    //     audio: false,
    //     // audio: { deviceId: audioSource },
    //     video: { deviceId: videoSource },
    //   })
    //   .then((stream) => console.tron.log(stream));
    // // .then((stream) => {
    // //   setSstream(stream);
    // //   videoRef.current.srcObject = stream;
    // //   socket.emit('speaker');
    // // });
    // // videoRef.current.srcObject = newStream;
    // console.tron.log(newStream);
  }

  function handleChange(e, type) {
    if (type === 'audioinput') {
      setAudioSource(e.target.value);
    } else if (type === 'videoinput') {
      setVideoSource(e.target.value);
    }
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <Container>
      {isSpeaker && (
        <>
          <section>
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
          </section>

          <section>
            <button onClick={handleClick}>Start Stream</button>
          </section>
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
