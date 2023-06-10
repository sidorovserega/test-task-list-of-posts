import { all } from "redux-saga/effects";
import { fetchPostsByUserWatcher, fetchPostsWatcher } from "./postSaga";
import { fetchByUserWatcher, fetchUsersWatcher } from "./usersSaga";
import { fetchCommentsByPostWatcher } from "./commentsSaga";

export function* rootWatcher() {
  yield all([
    fetchPostsWatcher(), 
    fetchPostsByUserWatcher(), 
    fetchUsersWatcher(), 
    fetchByUserWatcher(), 
    fetchCommentsByPostWatcher()
  ]);
}