//загрузка комментариев к конкретному посту-----------------------------------------------
export const asyncFetchCommentsByPost = (postId) => ({
  type: 'ASYNC_FETCH_COMMENTS_BY_POST',
  payload: postId
});

export const getCommentsByPost = comments => ({
  type: 'GET_COMMENTS_BY_POST',
  payload: comments
});
//--------------------------------------------------------------------------------------