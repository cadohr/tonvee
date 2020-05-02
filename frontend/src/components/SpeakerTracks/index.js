import React from 'react';

import useVideoContext from '~/hooks/useVideoContext';
import usePublications from '~/hooks/usePublications';

import Publication from '~/components/Publication';

export default function SpeakerTracks({
  speaker,
  disableAudio,
  enableShareScreen,
  videoPriority,
}) {
  const { room } = useVideoContext();
  const publications = usePublications(speaker);

  const filteredPublications = publications.filter(
    (p) => p.trackName !== 'screen',
  );

  return (
    <>
      {filteredPublications.map((publication) => (
        <Publication
          key={publication.kind}
          publication={publication}
          speaker={speaker}
          disableAudio={disableAudio}
          videoPriority={videoPriority}
        />
      ))}
    </>
  );
}
