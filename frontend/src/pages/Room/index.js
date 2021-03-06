import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Header,
  Title,
  Stands,
  Wrapper,
  InnerTitle,
  Button,
  RommContent,
  Video,
  Chat,
} from './styles';
import Videoplaceholder from '../../assets/pageRooms/videoPlaceholder.png';
import placeholderChat from '../../assets/pageRooms/chat.svg';

import socket from '~/services/socket';

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

  function handleCanPlay() {
    videoRef.current.play();
  }

  useEffect(() => {
    if (!isSpeaker) {
      let pc = null;
      socket.on('offer', (id, description) => {
        pc = new RTCPeerConnection(config);

        pc.setRemoteDescription(description)
          .then(() => pc.createAnswer())
          .then((sdp) => pc.setLocalDescription(sdp))
          .then(() => {
            socket.emit('answer', id, pc.localDescription);
          });

        pc.ontrack = (event) => {
          videoRef.current.srcObject = event.streams[0];
        };

        pc.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit('candidate', id, event.candidate);
          }
        };
      });

      socket.on('candidate', (id, candidate) => {
        pc.addIceCandidate(new RTCIceCandidate(candidate)).catch((e) =>
          console.error(e),
        );
      });

      socket.on('connect', () => {
        socket.emit('viewer');
      });

      socket.on('speaker', (id) => {
        socket.emit('viewer', id);
      });

      socket.on('disconnectPeer', () => {
        pc.close();
      });
    }

    return () => {
      socket.close();
    };
  }, [isSpeaker]);

  return (
    <Container>
      <Header>
        <Title>Palestra: Estratégias de transformação digital - Cases</Title>
        <Stands>
          <Wrapper className="stands">
            <InnerTitle>
              Visite o Stand virtual <br /> Fashion Glasses
            </InnerTitle>
            <Button>Conhecer</Button>
          </Wrapper>
        </Stands>
      </Header>
      <RommContent>
        <Video>
          {/* {videoRef.current ? ( */}
          {/* <video
            playsInline
            onCanPlay={handleCanPlay}
            autoPlay
            muted={isSpeaker}
            ref={videoRef}
          /> */}
          {/* ) : ( */}
          <img src={Videoplaceholder} alt="video" />
          {/* )} */}
        </Video>
        <Chat>
          <img src={placeholderChat} />
        </Chat>
        {/* <Chat></Chat> */}
      </RommContent>
    </Container>
  );
}
