import axios from "axios";

export const fetchPosts = (limit, page) => (dispatch) => {
  dispatch(setLoading(false));
  
  setTimeout(()=>{
    axios.get(`/posts`, {
      params: {
        _limit: limit,
        _page: page        
      }
    }).
    then(({data}) => dispatch(setPosts(data)));
  }, 500);
};

export const fetchPostsByUser = (userId) => (dispatch) => {
  dispatch(setLoading(false));
  
  setTimeout(()=>{
    axios.get(`/posts?userId=${userId}`).
    then(({data}) => dispatch(setPostsByUser(data)));
  }, 500);
}

export const setPosts = (items) => ({
  type: 'SET_POSTS',
  payload: items
});

export const setPostsByUser = (postsByUser) => ({
  type: 'SET_POSTS_BY_USER',
  payload: postsByUser
});

export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
