const initialState = {
  items: [],
  isLoadingPosts: false
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
        isLoadingPosts: true
      };
    case 'SET_POSTS_BY_USER':
      return {
          ...state,
          items: [...action.payload],
          isLoadingPosts: true
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoadingPosts: action.payload
      };
    default:
      return state;
  }  
}

export default posts;