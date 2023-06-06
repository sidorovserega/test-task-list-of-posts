import axios from "axios";

//загрузка комментариев к конкретному посту-----------------------------------------------
export const fetchCommentsByPost = (postId) => (dispatch) => {
  
  axios.get(`/posts/${postId}/comments`).
    then(({data}) => dispatch(getCommentsByPost(data)));
}

export const getCommentsByPost = comments => ({
  type: 'GET_COMMENTS_BY_POST',
  payload: comments
});
//--------------------------------------------------------------------------------------