import React from 'react';

import usePublications from '~/hooks/usePublications';

import { Container, Header } from './styles';

export default function SpeakerInfo({ speaker, children }) {
  const publications = usePublications(speaker);

  const videoPublication = publications.find((p) =>
    p.trackName.includes('camera'),
  );
  return (
    <Container>
      <Header>{speaker.identity}</Header>
      {children}
    </Container>
  );
}
