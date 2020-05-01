import React from 'react';

import useVideoContext from '~/hooks/useVideoContext';

import history from '~/services/history';

import { Container } from './styles';

export default function Lobby() {
  const { connect } = useVideoContext();

  function handleSubmit(e) {
    e.preventDefault();

    connect(process.env.REACT_APP_TWILIO_ACCESS_TOKEN);

    history.push('/arena/cadoh:arena-x');
  }

  return (
    <Container>
      <h1>Lobby</h1>

      <button onClick={handleSubmit}>Join Room</button>
    </Container>
  );
}
