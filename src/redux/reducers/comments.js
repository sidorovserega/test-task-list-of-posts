const initialState = {
  comments: []
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
       }
    default:
      return state;
  }  
}

export default comments;