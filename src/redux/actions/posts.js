import axios from "axios";
//загрузка всех постов на главной странице------------------------------------------------
export const fetchPosts = () => (dispatch) => {
  
  dispatch(setLoading(false));
  
  setTimeout(()=>{
    axios.get(`/posts`).
    then(({data}) => dispatch(setPosts(data)));
  }, 500);
};

export const setPosts = (items) => ({
  type: 'SET_POSTS',
  payload: items
});
//------------------------------------------------------------------------------------------

//загрузка постов конкретного поьзователя на странице пользователя--------------------------
export const fetchPostsByUser = (userId) => (dispatch) => {
 
  dispatch(setLoading(false));
  
  setTimeout(()=>{
    axios.get(`/posts?userId=${userId}`).
    then(({data}) => dispatch(setPostsByUser(data)));
  }, 500);
}

export const setPostsByUser = (postsByUser) => ({
  type: 'SET_POSTS_BY_USER',
  payload: postsByUser
});
//------------------------------------------------------------------------------------------

//установка флага загрузки постов
export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
