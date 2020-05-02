import { all, takeLatest, call, put } from 'redux-saga/effects';
// import { jwt } from 'twilio';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

// import { encodeOpaqueId } from '~/utils';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'sessions', { email, password });

    const { token, user } = data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    // const accessToken = new jwt.AccessToken(
    //   process.env.REACT_APP_TWILIO_ACCOUNT_SID,
    //   process.env.REACT_APP_TWILIO_API_KEY_SID,
    //   process.env.REACT_APP_TWILIO_API_KEY_SECRET,
    //   { identity: user.id, ttl: 86400 },
    // );

    // if (user.type === 'speaker') {
    //   const videoGrant = new jwt.AccessToken.VideoGrant({
    //     room: `${user.id}:arenax`,
    //   });
    //   accessToken.addGrant(videoGrant);
    // }

    // const opaqueAccessToken = encodeOpaqueId(accessToken.toJwt());

    yield put(signInSuccess(token, user, ''));

    history.push('/lobby');
  } catch (error) {
    console.tron.log(error);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    yield put(signUpSuccess());

    history.push('/');
  } catch (error) {
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
