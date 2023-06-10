//загрузка всех пользователей при загрузке главной странцы------------------------------

export const asyncFetchUsers = () => ({
  type: 'ASYNC_FETCH_USERS'
})

export const setUsers = users => ({
  type: 'SET_USERS',
  payload: users
});
//--------------------------------------------------------------------------------------

//загрузка конкретного пользователя на странице пользователя----------------------------
export const asyncFetchByUser = (userId) => ({
  type: 'ASYNC_FETCH_BY_USER',
  payload: userId
});

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