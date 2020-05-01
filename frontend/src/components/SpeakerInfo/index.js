import React from 'react';

import { Container, Header } from './styles';

export default function SpeakerInfo({ participant, children }) {
  return (
    <Container>
      <Header>{participant.identity}</Header>
      {children}
    </Container>
  );
}
