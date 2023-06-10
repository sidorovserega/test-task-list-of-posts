const initialState = {
  users: [],
  isLoadingUser: false,
  errorUser: {
    isError: false,
    errorMessage: ''
  } 
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: [...action.payload],
        errorUser: {
          isError: false,
          errorMessage: ''
        } 
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
        isLoadingUser: true,
        errorUser: {
          isError: false,
          errorMessage: ''
        } 
      }
      case 'SET_USER_ERROR':
        return {
          ...state,
          isLoadingUser: true,
          errorUser: {
            isError: true,
            errorMessage: action.payload
          } 
        }
    default:
      return state;
  }  
}

export default users;