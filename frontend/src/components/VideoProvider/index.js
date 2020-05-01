import React, { createContext } from 'react';

import useLocalTracks from './useLocalTracks';
import useRoom from '~/hooks/useRoom';

export const VideoContext = createContext(null);

export default function VideoProvider({
  options,
  children,
  onError = () => {},
  onDisconnect = () => {},
}) {
  const onErrorCallback = (error) => {
    console.log(`ERROR: ${error.message}`, error);
    onError(error);
  };

  const { localTracks, getLocalVideoTrack } = useLocalTracks();
  const { room, isConnecting, connect } = useRoom(
    localTracks,
    onErrorCallback,
    options,
  );

  return (
    <VideoContext.Provider
      value={{
        room,
        localTracks,
        isConnecting,
        onError: onErrorCallback,
        onDisconnect,
        getLocalVideoTrack,
        connect,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
