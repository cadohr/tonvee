import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { createArenaSuccess, createArenaFailure } from './actions';

export function* createArena() {
  try {
    const { data } = yield call(api.get, 'arena');

    yield put(createArenaSuccess(data));
  } catch (error) {
    toast.error('Não encontramos a arena que você estava procurando.');
    yield put(createArenaFailure());
  }
}

export default all([takeLatest('@arena/CREATE_ARENA_REQUEST', createArena)]);
