import {put, takeEvery, call} from 'redux-saga/effects';
import { setLoading, setPosts, setPostsByUser, setPostsError } from '../actions/posts';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//загрузка всех постов---------------------------------------------------------------
function* fetchPostsWorker() {
  try {
    yield put(setLoading(false));
    yield delay(500);
    const {data} = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/posts`));
    yield put(setPosts(data));
  } 
  catch(e) {
    yield put(setPostsError(e.message));
    yield put(setLoading(true));
  } 
}

export function* fetchPostsWatcher() {
  yield takeEvery('ASYNC_FETCH_POSTS', fetchPostsWorker);
}
//--------------------------------------------------------------------------------------

//загрузка постов конкретного пользователя-----------------------------------------------
function* fetchPostsByUserWorker(action) {  
  try {
    yield put(setLoading(false));
    yield delay(500);
    const {data} = yield call(() => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${action.payload}`));
    yield put(setPostsByUser(data));
  } catch(e) {
    yield put(setPostsError(e.message));
    yield put(setLoading(true));
  } 
}

export function* fetchPostsByUserWatcher() {
  yield takeEvery('ASYNC_FETCH_POSTS_BY_USER', fetchPostsByUserWorker);
}
//---------------------------------------------------------------------------------------




