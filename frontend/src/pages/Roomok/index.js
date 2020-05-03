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

  const [stream, setStream] = useState();
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

  async function speaker() {
    // navigator.mediaDevices.addEventListener('devicechange', getDevices);

    // getDevices();

    socket.on('viewer', () => {
      console.log('evento viewer, inside speaker');
    });

    // socket.on('viewer', (id, message) => {
    //   console.tron.log('evento viewer line 46: ', message);
    //   setPeerConnection({ id, peer: new RTCPeerConnection(config) });
    //   // peerConnections[id] = peerConnection;
    //   setPeerConnections((prevPeerConnections) => [
    //     ...prevPeerConnections,
    //     peerConnection,
    //   ]);

    //   let stream = videoRef.current.srcObject;
    //   stream
    //     .getTracks()
    //     .forEach((track) => peerConnection.peer.addTrack(track, stream));

    //   peerConnection.peer.onicecandidate = (event) => {
    //     if (event.candidate) {
    //       socket.emit('candidate', id, event.candidate);
    //     }
    //   };

    //   const offer = peerConnection.peer.createOffer();
    //   console.tron.log('offer:', offer);
    //   // peerConnection.peer
    //   //   .createOffer()
    //   //   .then((sdp) => peerConnection.peer.setLocalDescription(sdp))
    //   //   .then(() => {
    //   //     socket.emit('offer', id, peerConnection.peer.localDescription);
    //   //   });
    // });

    // socket.on('answer', (id, description) => {
    //   peerConnections.forEach((p) => {
    //     if (p.id === id) {
    //       p.peer.setRemoteDescription(description);
    //     }
    //   });
    //   peerConnections[id].setRemoteDescription(description);
    // });

    // socket.on('candidate', (id, candidate) => {
    //   peerConnections.forEach((p) => {
    //     if (p.id === id) {
    //       p.peer.addIceCandidate(new RTCIceCandidate(candidate));
    //     }
    //   });
    // });

    // socket.on('disconnectPeer', (id) => {
    //   peerConnections.forEach((p) => {
    //     if (p.id === id) {
    //       p.peer.close();
    //     }
    //   });

    //   peerConnections.filter((p) => p.id != id);

    //   // peerConnections[id].close();
    //   // delete peerConnections[id];
    // });
  }

  function viewer() {
    // socket.on('offer', (id, description) => {
    //   setPeerConnection({ id, peer: new RTCPeerConnection(config) });
    //   peerConnection.peer
    //     .setRemoteDescription(description)
    //     .then(() => peerConnection.peer.createAnswer())
    //     .then((sdp) => peerConnection.peer.setLocalDescription(sdp))
    //     .then(() => {
    //       socket.emit('answer', id, peerConnection.peer.localDescription);
    //     });
    //   peerConnection.peer.ontrack = (event) => {
    //     console.tron.log(event.streams);
    //     videoRef.current.srcObject = event.streams[0];
    //   };
    //   peerConnection.peer.onicecandidate = (event) => {
    //     if (event.candidate) {
    //       socket.emit('candidate', id, event.candidate);
    //     }
    //   };
    // });
    // socket.on('candidate', (id, candidate) => {
    //   peerConnection.peer
    //     .addIceCandidate(new RTCIceCandidate(candidate))
    //     .catch((e) => console.error(e));
    // });
    // socket.on('connect', () => {
    //   socket.emit('viewer');
    // });
    socket.on('speaker', (id) => {
      console.tron.log('evento speaker line 134');
      socket.emit('viewer', id);
    });
    // socket.on('disconnectPeer', () => {
    //   peerConnection.peer.close();
    // });
  }

  useEffect(() => {
    // if (isSpeaker) {
    //   speaker();
    // } else {
    viewer();
    // }

    return () => {
      // socket.close();
    };
  }, [isSpeaker]);

  useEffect(() => {
    return () => {
      navigator.mediaDevices.removeEventListener('devicechange', getDevices);

      stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  function handleClick() {
    // navigator.mediaDevices
    //   .getUserMedia({
    //     audio: { deviceId: audioSource },
    //     video: { deviceId: videoSource },
    //   })
    //   .then((stream) => {
    //     setStream(stream);
    //     videoRef.current.srcObject = stream;
    //     socket.emit('speaker');
    //   });

    console.tron.log('emitindo evento speaker line 181');
    socket.emit('speaker');
  }

  function handleChange(e, type) {
    if (type === 'audioinput') {
      setAudioSource(e.target.value);
    } else if (type === 'videoinput') {
      setVideoSource(e.target.value);
    }
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
      <Video playsInline autoPlay muted={isSpeaker} ref={videoRef} />
    </Container>
  );
}
