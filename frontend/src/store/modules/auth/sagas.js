import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import firebase from '~/services/Firebase';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, pass } = payload;

    const response = yield firebase.auth().signInWithEmailAndPassword(email, pass);

    console.log(response);

    // const { token, user } = response.data;

    // api.defaults.headers.authorization = `Bearer ${token}`;

    // yield put(signInSuccess(token, user));

    // history.push('/encomendas');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');
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
  takeLatest('@auth/SIGN_OUT', signOut),
]);
