import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'sessions', { email, password });

    const { token, user, accessToken } = data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, accessToken));

    history.push('/lobby');
  } catch (error) {
    toast.error('Falha no login, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    toast.success('Cadastro realizado com sucesso');
    yield put(signUpSuccess());

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados');
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
