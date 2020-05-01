import React, { useRef, useEffect } from 'react';

import { Video } from './styles';

export default function VideoTrack({ track, isLocal, priority }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    el.muted = true;
    if (track.setPriority && priority) {
      track.setPriority(priority);
    }
    track.attach(el);

    () => {
      track.detach(el);
      if (track.setPriority && priority) {
        track.setPriority(priority);
      }
    };
  }, [track, priority]);

  return <Video ref={ref} />;
}
