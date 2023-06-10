import {put, takeEvery, call} from 'redux-saga/effects';
import { setByUser, setLoadingUser, setUsers } from '../actions/users';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//загрузка всех пользователей-------------------------------------------------------
function* fetchUsersWorker() {
  yield put(setLoadingUser(false));
  yield delay(500);
  const {data} = yield call(() => axios.get(`/users`));
  yield put(setUsers(data));
}

export function* fetchUsersWatcher() {
  yield takeEvery('ASYNC_FETCH_USERS', fetchUsersWorker);
}
//-----------------------------------------------------------------------------------

//загрузка одного пользователя--------------------------------------------------------
function* fetchByUserWorker(action) {
  yield put(setLoadingUser(false));
  yield delay(500);
  const {data} = yield call(() => axios.get(`/users/${action.payload}`));
  yield put(setByUser(data));
}

export function* fetchByUserWatcher() {
  yield takeEvery('ASYNC_FETCH_BY_USER', fetchByUserWorker);
}
//------------------------------------------------------------------------------------


