import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

export default function Room({ sid }) {
  const [room, setRoom] = useState({});

  useEffect(() => {
    async function loadRoom() {
      const { data } = await api.get(`/rooms/${sid}`);

      console.tron.log(data);

      setRoom(data);
    }

    loadRoom();
  }, [sid]);

  return <Container>{room.uniqueName}</Container>;
}
