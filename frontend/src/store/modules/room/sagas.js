import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createRoomSuccess, createRoomFail } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* createRoom({ payload }) {
  try {
    const { email, password } = payload;
    console.log(payload);

    // const { token, user } = response.data;

    // api.defaults.headers.authorization = `Bearer ${token}`;

    // yield put(signInSuccess(token, user));

    // history.push('/encomendas');
  } catch (error) {
<<<<<<< HEAD
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(createRoomFail());
=======
    // yield put(signFailure());
>>>>>>> generate access token
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
  takeLatest('@auth/CREATE_ROOM_REQUEST', createRoom),
]);