import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Room from '~/components/Room';

import { Container, RoomList } from './styles';

export default function Lobby() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function loadRooms() {
      const { data } = await api.get('/rooms');

      console.tron.log(data);

      setRooms(data);
    }

    loadRooms();
  }, []);

  return (
    <Container>
      <h1>Lobby</h1>

      <RoomList>
        {rooms.map((room) => (
          <Room sid={room.sid} />
        ))}
      </RoomList>
    </Container>
  );
}
