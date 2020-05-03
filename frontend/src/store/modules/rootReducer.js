import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import room from './room/reducer';
import arena from './arena/reducer';


export default combineReducers({ auth, user, room, arena });
