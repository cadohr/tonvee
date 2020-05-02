import { all, takeLatest, call, put } from 'redux-saga/effects';
import EventEmitter from 'events';
import { connect } from 'twilio-video';

import twilioConfig from '~/config/TwilioConfig';

import api from '~/services/api';

import { connectRoomSuccess, connectRoomFailure } from './actions';

export function* connectRoom({ payload }) {
  try {
    const { accessToken, name } = payload;

    // const newRoom = yield call(connect, accessToken, {
    //   room: name,
    //   tracks: [],
    //   ...twilioConfig,
    // });

    // newRoom.once('disconnected', () => {
    //   // Reset the room only after all other `disconnected` listeners have been called.
    //   setTimeout(() => setRoom(new EventEmitter()));
    //   window.removeEventListener('beforeunload', disconnect);

    //   if (isMobile) {
    //     window.removeEventListener('pagehide', disconnect);
    //   }
    // });

    // yield put(connectRoomSuccess(newRoom));

    // useCallback(
    //   (token) => {
    //     setIsConnecting(true);
    //     return Video.connect(token, { ...options, tracks: [] }).then(
    //       (newRoom) => {
    //         setRoom(newRoom);
    //         const disconnect = () => newRoom.disconnect();

    //         newRoom.once('disconnected', () => {
    //           // Reset the room only after all other `disconnected` listeners have been called.
    //           setTimeout(() => setRoom(new EventEmitter()));
    //           window.removeEventListener('beforeunload', disconnect);

    //           if (isMobile) {
    //             window.removeEventListener('pagehide', disconnect);
    //           }
    //         });

    //         // @ts-ignore
    //         window.twilioRoom = newRoom;

    //         localTracksRef.current.forEach((track) =>
    //           // Tracks can be supplied as arguments to the Video.connect() function and they will automatically be published.
    //           // However, tracks must be published manually in order to set the priority on them.
    //           // All video tracks are published with 'low' priority. This works because the video
    //           // track that is displayed in the 'MainParticipant' component will have it's priority
    //           // set to 'high' via track.setPriority()
    //           newRoom.localParticipant.publishTrack(track, {
    //             priority: track.kind === 'video' ? 'low' : 'standard',
    //           }),
    //         );

    //         setIsConnecting(false);

    //         // Add a listener to disconnect from the room when a user closes their browser
    //         window.addEventListener('beforeunload', disconnect);

    //         if (isMobile) {
    //           // Add a listener to disconnect from the room when a mobile user closes their browser
    //           window.addEventListener('pagehide', disconnect);
    //         }
    //       },
    //       (error) => {
    //         onError(error);
    //         setIsConnecting(false);
    //       },
    //     );
    //   },
    //   [options, onError],
    // );

    // const { token, user } = response.data;

    // api.defaults.headers.authorization = `Bearer ${token}`;

    // yield put(signInSuccess(token, user));

    // history.push('/encomendas');
  } catch (error) {
    console.tron.log(error);
    yield put(connectRoomFailure());
  }
}

export default all([takeLatest('@room/CONNECT_ROOM_REQUEST', connectRoom)]);
