const initialState = {
  searchTitlePost: '',
  sortBy: ''
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      };
    case 'SET_TITLE_POST':
      return {
        ...state,
        searchTitlePost: action.payload
      };
    default:
      return state;
  }  
}

export default filters;