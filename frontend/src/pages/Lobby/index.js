import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import ChatBox from '~/components/ChatBox';

import liveLogo from '~/assets/live.svg';
import EventMap from '~/assets/event-map.svg';
import techIcon from '~/assets/iconsMap/tech.svg';
import varejoIcon from '~/assets/iconsMap/varejo.svg';
import financasIcon from '~/assets/iconsMap/financas.svg';
import inovacaoIcon from '~/assets/iconsMap/inovacao.svg';
import placegolderShow from '~/assets/placeholders/placegolderShow.png';
import palestra1 from '~/assets/pageLobby/palestra1';
import palestra2 from '~/assets/pageLobby/palestra2';
import palestra3 from '~/assets/pageLobby/palestra3';
import palestra4 from '~/assets/pageLobby/palestra4';


import {
  Container,
  LefContainer,
  RightContainer,
  MusicLive,
  Hello,
  SubTitle,
  Text,
  LiveRooms,
  LiveContent,
  BackgroundStrip,
  MiniLive,
  TextContent,
  Live,
  EventContent,
  MapEvent,
  CardMap,
  CardText,
  Title,
} from './styles';

export default function Lobby() {
  const isSpeaker = useSelector(
    (state) => state.user.profile.type === 'speaker',
  );
  const [arenas, setArenas] = useState([]);

  useEffect(() => {
    async function loadArenas() {
      const { data } = await api.get('/arenas');

      setArenas(
        data.map((arena) => {
          if (arena.slug === 'arena-tech') {
            arena.icon = techIcon;
            arena.class = 'tech';
            arena.description = 'Cases e novas tecnologias para produtos digitais.';
            arena.room = '/room/techroom';
            arena.sroom = '/sroom/techroom';
            arena.palestra = palestra1;
          }

          if (arena.slug === 'arena-inovacao') {
            arena.icon = inovacaoIcon;
            arena.class = 'inovacao';
            arena.description = 'Inovação por meio da colaboração e da cooperação entre empresas e indústrias.';
            arena.room = '/room/inovacaoroom';
            arena.sroom = '/sroom/inovacaoroom';
            arena.palestra = palestra2;
          }

          if (arena.slug === 'arena-financas') {
            arena.icon = financasIcon;
            arena.class = 'financas';
            arena.description = 'Finanças em 2020 e como prosperar na crise.';
            arena.room = '/room/financasroom';
            arena.sroom = '/sroom/financasroom';
            arena.palestra = palestra3;
          }

          if (arena.slug === 'arena-varejo') {
            arena.icon = varejoIcon;
            arena.class = 'varejo';
            arena.description = 'Tendências, tecnologias e o que vai ser do futuro do varejo.';
            arena.room = '/room/varejoroom';
            arena.sroom = '/sroom/varejoroom';
            arena.palestra = palestra4;
          }

          return arena;
        }),
      );
    }

    loadArenas();
  }, []);

  return (
    <Container>
      <LefContainer>
        <Hello>OLÁ!</Hello>
        <SubTitle>Seja Bem-Vindo!</SubTitle>
        <Text className="mainText">
          Não esqueça de usar o seu cupom <b>#TONVEE10</b> <br /> no iFood para
          o seu coffee break!
        </Text>
        <MusicLive>
          <img src={placegolderShow} alt="placeholder" />
          <ChatBox />
        </MusicLive>
      </LefContainer>
      <RightContainer>
        <LiveRooms>
          <BackgroundStrip />
          <LiveContent>
            <TextContent>
              <Live>
                <img src={liveLogo} alt="Live" />
              </Live>
              <Text>
                Veja as paletras <br /> que estão no ar!
              </Text>
            </TextContent>
            {arenas.map((arena) => (
              <MiniLive key={arena.slug}>
                <Link to={isSpeaker ? arena.sroom : arena.room}>
                  <img src={arena.palestra} alt="" />
                </Link>
              </MiniLive>
            ))}
          </LiveContent>
        </LiveRooms>
        <EventContent>
          <MapEvent>
            {arenas.map((arena) => (
              <CardMap className={arena.class} key={arena.slug}>
                <CardText>
                  <Link to={`/arena/${arena.slug}`}>
                    <Title>{arena.name}</Title>
                    <Text>{arena.description}</Text>
                  </Link>
                </CardText>
                <img src={arena.icon} alt={arena.name} />
              </CardMap>
            ))}
            <img src={EventMap} className="imageMap" alt="Mapa do Evento" />
          </MapEvent>
        </EventContent>
      </RightContainer>
    </Container>
  );
}
