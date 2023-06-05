const initialState = {
  items: [],
  isLoading: false
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
        isLoading: true
      };
    case 'SET_POSTS_BY_USER':
      return {
        ...state,
        items: [...action.payload],
        isLoading: true
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }  
}

export default posts;