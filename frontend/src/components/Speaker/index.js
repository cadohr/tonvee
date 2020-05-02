import React from 'react';

import useRoomSpeaker from '~/hooks/useRoomSpeaker';

import SpeakerInfo from '~/components/SpeakerInfo';
import SpeakerTracks from '../SpeakerTracks';

export default function Speaker() {
  const speaker = useRoomSpeaker();

  console.log(speaker);

  return (
    <SpeakerInfo speaker={speaker}>
      <SpeakerTracks
        speaker={speaker}
        disableAudio
        enableShareScreen={false}
        videoPriority="high"
      />
    </SpeakerInfo>
  );
}
