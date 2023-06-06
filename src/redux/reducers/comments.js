const initialState = {
  comments: []
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMMENTS_BY_POST':
      return {
        ...state,
        comments: [...state.comments, ...action.payload]
       }
    default:
      return state;
  }  
}

export default comments;