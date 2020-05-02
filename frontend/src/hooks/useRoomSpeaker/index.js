import useVideoContext from '~/hooks/useVideoContext';
import useParticipants from '~/hooks/useParticipants';

export default function useRoomSpeaker() {
  const { room } = useVideoContext();
  const participants = useParticipants();

  return room.localParticipant || participants[0];
}
