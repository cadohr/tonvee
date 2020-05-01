import React from 'react';

import useVideoContext from '~/hooks/useVideoContext';

import { Container } from './styles';

export default function Room() {
  const { room } = useVideoContext();
  console.tron.log(room);
  return <Container>Room</Container>;
}
