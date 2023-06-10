const initialState = {
  users: [],
  isLoadingUser: false
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: [...action.payload]
       }
    case 'SET_BY_USER':
    let newUsers = [];  
      if (state.users.find(user => user.id === action.payload.id)) {
        newUsers = [...state.users];
      } else {
        newUsers = [...state.users, action.payload];
      }
    
    return {
        ...state,
        users: newUsers,
        isLoadingUser: true
      }
    default:
      return state;
  }  
}

export default users;