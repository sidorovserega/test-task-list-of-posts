const initialState = {
  items: [],
  isLoadingPosts: false,
  errorPosts: {
    isError: false,
    errorMessage: ''
  }
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
        isLoadingPosts: true, 
        errorPosts: {
          isError: false,
          errorMessage: ''
        }
      };
    case 'SET_POSTS_BY_USER':
      return {
          ...state,
          items: [...action.payload],
          isLoadingPosts: true,
          errorPosts: {
            isError: false,
            errorMessage: ''
          }
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoadingPosts: action.payload
      };
      case 'SET_POSTS_ERROR':
        return {
            ...state,
            errorPosts: {
              isError: true,
              errorMessage: action.payload
            } 
          };
    default:
      return state;
  }  
}

export default posts;