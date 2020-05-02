import { useEffect, useState } from 'react';

import useVideoContext from '~/hooks/useVideoContext';

export default function useParticipants() {
  const { room } = useVideoContext();
  console.tron.log(room);
  const [participants, setParticipants] = useState(
    Array.from(room.participants.values()),
  );

  useEffect(() => {
    const participantConnected = (participant) =>
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    const participantDisconnected = (participant) =>
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant),
      );
    room.on('participantConnected', participantConnected);
    room.on('participantDisconnected', participantDisconnected);
    return () => {
      room.off('participantConnected', participantConnected);
      room.off('participantDisconnected', participantDisconnected);
    };
  }, [room]);

  return participants;
}
