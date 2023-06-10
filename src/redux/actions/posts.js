//загрузка всех постов на главной странице------------------------------------------------
export const asyncFetchPosts = () => ({
  type: 'ASYNC_FETCH_POSTS'
})

export const setPosts = (items) => ({
  type: 'SET_POSTS',
  payload: items
});
//------------------------------------------------------------------------------------------

//загрузка постов конкретного поьзователя на странице пользователя--------------------------
export const asyncFetchPostsByUser = (userId) => ({
  type: 'ASYNC_FETCH_POSTS_BY_USER',
  payload: userId
})

export const setPostsByUser = (postsByUser) => ({
  type: 'SET_POSTS_BY_USER',
  payload: postsByUser
});
//------------------------------------------------------------------------------------------

//установка флага загрузки постов
export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value
});
