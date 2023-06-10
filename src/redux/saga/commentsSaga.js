import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getCommentsByPost } from "../actions/comments";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//загрузка комментариев к посту------------------------------------------------------
function* fetchCommentsByPostWorker(action) {
  console.log(action.payload);
  yield delay(500);
  const {data} = yield call(() => axios.get(`/posts/${action.payload}/comments`));
  yield put(getCommentsByPost(data));
  console.log(data);
}

export function* fetchCommentsByPostWatcher() {
  yield takeEvery('ASYNC_FETCH_COMMENTS_BY_POST', fetchCommentsByPostWorker);
}
//-------------------------------------------------------------------------------------