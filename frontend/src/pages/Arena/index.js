import React from 'react';
import { useParams } from 'react-router-dom';

import useRoomState from '~/hooks/useRoomState';

import Room from '~/components/Room';

import { Container } from './styles';

export default function Arena() {
  const { id } = useParams();
  const roomState = useRoomState();

  return (
    <Container>{roomState === 'connected' ? <Room id={id} /> : null}</Container>
  );
}
