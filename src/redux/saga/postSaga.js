import {put, takeEvery, call} from 'redux-saga/effects';
import { setLoading, setPosts, setPostsByUser } from '../actions/posts';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//загрузка всех постов---------------------------------------------------------------
function* fetchPostsWorker() {
  yield put(setLoading(false));
  yield delay(500);
  const {data} = yield call(() => axios.get(`/posts`));
  yield put(setPosts(data));
}

export function* fetchPostsWatcher() {
  yield takeEvery('ASYNC_FETCH_POSTS', fetchPostsWorker);
}
//--------------------------------------------------------------------------------------

//загрузка постов конкретного пользователя-----------------------------------------------
function* fetchPostsByUserWorker(action) {  
  
  yield put(setLoading(false));
  yield delay(500);
  const {data} = yield call(() => axios.get(`/posts?userId=${action.payload}`));
  yield put(setPostsByUser(data));
}

export function* fetchPostsByUserWatcher() {
  yield takeEvery('ASYNC_FETCH_POSTS_BY_USER', fetchPostsByUserWorker);
}
//---------------------------------------------------------------------------------------




