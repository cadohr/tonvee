import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import room from './room/sagas';
import arena from './arena/sagas';


export default function* rootSaga() {
  return yield all([auth, user, room, arena]);
}
