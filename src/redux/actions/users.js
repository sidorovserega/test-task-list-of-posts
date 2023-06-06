import axios from "axios";

//загрузка всех пользователей при загрузке главной странцы------------------------------
export const fetchUsers = () => (dispatch) => {
  axios.get(`/users`).
    then(({data}) => dispatch(setUsers(data)));
};

export const setUsers = users => ({
  type: 'SET_USERS',
  payload: users
});
//--------------------------------------------------------------------------------------

//загрузка конкретного пользователя на странице пользователя----------------------------
export const fetchUserBy = (userId) => (dispatch) => {
  
  dispatch(setLoadingUser(false));
  
  setTimeout(()=>{
    axios.get(`/users/${userId}`).
      then(({data}) => dispatch(setByUser(data)));
  }, 500);
}

export const setByUser = user => ({
  type: 'SET_BY_USER',
  payload: user
});
//--------------------------------------------------------------------------------------

//установка флага загрузки пользователя-------------------------------------------------
export const setLoadingUser = (value) => ({
  type: 'SET_LOADING_USER',
  payload: value
});