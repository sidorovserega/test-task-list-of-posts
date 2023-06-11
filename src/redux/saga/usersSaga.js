import {put, takeEvery, call} from 'redux-saga/effects';
import { setByUser, setLoadingUser, setUserError, setUsers } from '../actions/users';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//загрузка всех пользователей-------------------------------------------------------
function* fetchUsersWorker() {
  try {
    yield put(setLoadingUser(false));
    yield delay(500);
    const {data} = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/users`));
    yield put(setUsers(data));
  }
  catch(e) {
    yield put(setUserError(e.message));
  } 
}

export function* fetchUsersWatcher() {
  yield takeEvery('ASYNC_FETCH_USERS', fetchUsersWorker);
}
//-----------------------------------------------------------------------------------

//загрузка одного пользователя--------------------------------------------------------
function* fetchByUserWorker(action) {
  try {
    yield put(setLoadingUser(false));
    yield delay(500);
    const {data} = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/users/${action.payload}`));
    yield put(setByUser(data));
  }
  catch(e) {
    yield put(setUserError(e.message));
  } 
}

export function* fetchByUserWatcher() {
  yield takeEvery('ASYNC_FETCH_BY_USER', fetchByUserWorker);
}
//------------------------------------------------------------------------------------


