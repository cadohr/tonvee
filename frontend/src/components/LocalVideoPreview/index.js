import React from 'react';

import useVideoContext from '~/hooks/useVideoContext';
import VideoTrack from '~/components/VideoTrack';

export default function LocalVideoPreview() {
  const { localTracks } = useVideoContext();

  const videoTrack = localTracks.find((track) => track.name === 'camera');

  return videoTrack ? <VideoTrack track={videoTrack} isLocal /> : null;
}
