import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getCommentsByPost, getCommentsError } from "../actions/comments";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//загрузка комментариев к посту------------------------------------------------------
function* fetchCommentsByPostWorker(action) {
  try {
    yield delay(500);
    const {data} = yield call(() => axios.get(`/posts/${action.payload}/comments`));
    yield put(getCommentsByPost(data));
  }
  catch(e) {
    yield put(getCommentsError(action.payload, e.message));
  }
}

export function* fetchCommentsByPostWatcher() {
  yield takeEvery('ASYNC_FETCH_COMMENTS_BY_POST', fetchCommentsByPostWorker);
}
//-------------------------------------------------------------------------------------