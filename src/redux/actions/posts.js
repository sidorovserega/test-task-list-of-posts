import axios from "axios";

export const fetchPosts = (limit, page) => (dispatch) => {
  dispatch(setLoading(false));
  
  // const filterTitle = searchTitlePost !== '' ? "?title=" + searchTitlePost : "";
  
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

export const setPosts = (items) => ({
  type: 'SET_POSTS',
  payload: items
});

export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
