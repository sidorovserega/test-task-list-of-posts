const initialState = {
  comments: [],
  errors: [] 
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMMENTS_BY_POST':
      let newCommentsPost = [];
      for(let comment of action.payload ) {
        if (!state.comments.find(comm => comm.postId === comment.postId)) {
          newCommentsPost.push(comment);
        }
      }
      return {
        ...state,
        comments: [...state.comments, ...newCommentsPost]
      };
    case 'GET_COMMENTS_ERROR':
      let newErrors = [];  
      if (state.errors.find(error => error.postId === action.payload.postId)) {
        newErrors = [...state.errors];
      } else {
        newErrors = [...state.errors, action.payload];
      }
      return {
          ...state,
          errors: newErrors
        };
    default:
      return state;
  }  
}

export default comments;