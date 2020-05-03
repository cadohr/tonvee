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

  const [peerConnection, setPeerConnection] = useState({});

  useEffect(() => {
    if (!isSpeaker) {
      socket.on('offer', (id, description) => {
        setPeerConnection({ id, peer: new RTCPeerConnection(config) });
        peerConnection.peer
          .setRemoteDescription(description)
          .then(() => peerConnection.peer.createAnswer())
          .then((sdp) => peerConnection.peer.setLocalDescription(sdp))
          .then(() => {
            socket.emit('answer', id, peerConnection.peer.localDescription);
          });
        peerConnection.peer.ontrack = (event) => {
          console.tron.log(event.streams);
          videoRef.current.srcObject = event.streams[0];
        };
        peerConnection.peer.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit('candidate', id, event.candidate);
          }
        };
      });

      socket.on('candidate', (id, candidate) => {
        peerConnection.peer
          .addIceCandidate(new RTCIceCandidate(candidate))
          .catch((e) => console.error(e));
      });

      socket.on('connect', () => {
        socket.emit('viewer');
      });

      socket.on('speaker', (id) => {
        socket.emit('viewer', id);
      });

      socket.on('disconnectPeer', () => {
        peerConnection.peer.close();
      });
    }

    return () => {
      socket.close();
    };
  }, [isSpeaker]);

  return (
    <Container>
      <Video playsInline autoPlay muted={isSpeaker} ref={videoRef} />
    </Container>
  );
}
