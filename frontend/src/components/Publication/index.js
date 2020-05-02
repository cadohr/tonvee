import React from 'react';

import useTrack from '~/hooks/useTrack';

import AudioTrack from '~/components/AudioTrack';
import VideoTrack from '~/components/VideoTrack';

// import { Container } from './styles';

export default function Publication({
  publication,
  disableAudio,
  videoPriority,
}) {
  const track = useTrack(publication);

  if (!track) return null;

  switch (track.kind) {
    case 'video':
      return <VideoTrack track={track} priority={videoPriority} />;
    case 'audio':
      return disableAudio ? null : <AudioTrack track={track} />;
    default:
      return null;
  }
}
