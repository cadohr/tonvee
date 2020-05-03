import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';

import ChatBox from '~/components/ChatBox';

import useVideoContext from '~/hooks/useVideoContext';

import liveLogo from '~/assets/live.svg';
import EventMap from '~/assets/event-map.svg';
import techIcon from '~/assets/iconsMap/tech.svg';
import varejoIcon from '~/assets/iconsMap/varejo.svg';
import financasIcon from '~/assets/iconsMap/financas.svg';
import inovacaoIcon from '~/assets/iconsMap/inovacao.svg';

import {
  Container,
  LefContainer,
  RightContainer,
  RoomList,
  Hello,
  SubTitle,
  Text,
  LiveRooms,
  TextContent,
  Live,
  EventContent,
  MapEvent,
  CardMap,
  CardText,
  Title,
} from './styles';

export default function Lobby() {
  const [rooms, setRooms] = useState([]);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const { connect } = useVideoContext();

  useEffect(() => {
    async function loadRooms() {
      const { data } = await api.get('/rooms');

      setRooms(data);
    }

    loadRooms();
  }, []);

  async function handleRoomClick(room) {
    await connect(accessToken);

    const roomName = room.uniqueName.split(':')[1];

    history.push(`/room/${roomName}`);
  }

  return (
    <Container>
      <LefContainer>
        <Hello>OLÁ!</Hello>
        <SubTitle>Seja Bem-Vindo!</SubTitle>
        <Text>
          Não esqueça de usar o seu cupom <b>#TONVEE10</b> <br /> NO IFOOD PARA
          O SEU COFEE BREAK!
        </Text>
        <ChatBox />
      </LefContainer>
      <RightContainer>
        <LiveRooms>
          <TextContent>
            <Live>
              <img src={liveLogo} alt="Live" />
            </Live>
            <Text>
              Veja as paletras <br /> que estão no ar!
            </Text>
          </TextContent>
          <RoomList>
            {rooms.map((room) => (
              <h1 onClick={() => handleRoomClick(room)}>{room.uniqueName}</h1>
            ))}
          </RoomList>
        </LiveRooms>
        <EventContent>
          <MapEvent>
            <CardMap className="tech">
              <CardText>
                <Title>Arena Tech</Title>
                <Text>
                  lorem ipsum dolor sit <br /> amet consectetur
                </Text>
              </CardText>
              <img src={techIcon} alt="tech" />
            </CardMap>
            <CardMap className="varejo">
              <CardText>
                <Title>Arena Varejo</Title>
                <Text>
                  lorem ipsum dolor sit <br /> amet consectetur
                </Text>
              </CardText>
              <img src={varejoIcon} alt="varejo" />
            </CardMap>
            <CardMap className="inovacao">
              <CardText>
                <Title>Arena Inovção</Title>
                <Text>
                  lorem ipsum dolor sit <br /> amet consectetur
                </Text>
              </CardText>
              <img src={inovacaoIcon} alt="Inovação" />
            </CardMap>
            <CardMap className="financas">
              <CardText>
                <Title>Arena Finanças</Title>
                <Text>
                  lorem ipsum dolor sit <br /> amet consectetur
                </Text>
              </CardText>
              <img src={financasIcon} alt="fincancas" />
            </CardMap>
            <img src={EventMap} className="imageMap" alt="Mapa do Evento" />
          </MapEvent>
        </EventContent>
      </RightContainer>
    </Container>
  );
}
