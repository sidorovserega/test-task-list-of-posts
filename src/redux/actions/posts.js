import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  dispatch(setLoading(false));
  
  //const filter = category !== null ? "&category=" + category : "";
  setTimeout(()=>{
    axios.get(`/posts`).
    then(({data}) => dispatch(setPosts(data)));
  }, 500);
};

export const setPosts = (items) => ({
  type: 'SET_POSTS',
  payload: items
});

export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
