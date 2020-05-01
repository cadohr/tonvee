import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { registerInSuccess, registerFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* registerNewUser({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    yield put(registerInSuccess());

    history.push('/');
  } catch (error) {
    toast.error('Falha na criação de conta, verifique seus dados');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@register/REGISTER_IN_REQUEST', registerNewUser),
]);
