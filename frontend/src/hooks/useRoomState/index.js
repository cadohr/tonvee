import { useEffect, useState } from 'react';
import useVideoContext from '~/hooks/useVideoContext';

export default function useRoomState() {
  const { room } = useVideoContext();
  const [state, setState] = useState('disconnected');

  useEffect(() => {
    const setRoomState = () => {
      console.tron.log('room state', room.state);
      setState(room.state || 'disconnected');
    };

    setRoomState();

    room
      .on('disconnected', setRoomState)
      .on('reconnected', setRoomState)
      .on('reconnecting', setRoomState);

    return () => {
      room
        .off('disconnected', setRoomState)
        .off('reconnected', setRoomState)
        .off('reconnecting', setRoomState);
    };
  }, [room]);

  return state;
}
