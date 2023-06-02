import axios from "axios";

export const fetchUsers = () => (dispatch) => {
  axios.get(`/users`).
    then(({data}) => dispatch(setUsers(data)));
  
};

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users
});
