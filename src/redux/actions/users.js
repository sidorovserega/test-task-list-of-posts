import axios from "axios";

export const fetchUsers = () => (dispatch) => {
  axios.get(`/users`).
    then(({data}) => dispatch(setUsers(data)));
};

export const setUsers = users => ({
  type: 'SET_USERS',
  payload: users
});

export const fetchUserBy = (userId) => (dispatch) => {
  axios.get(`/users/${userId}`).
    then(({data}) => dispatch(setByUser(data)));
}

export const setByUser = user => ({
  type: 'SET_BY_USER',
  payload: user
});