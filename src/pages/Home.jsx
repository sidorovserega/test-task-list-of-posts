import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchPosts } from '../redux/actions/posts';
import { asyncFetchUsers } from '../redux/actions/users';

import LoaderPost from '../components/loaders/LoaderPost';
import PaginationPosts from '../components/PaginationPosts';
import Error from '../components/Error';
import PostList from '../components/Posts/PostList';

import { getPagesCount, selectPostsFromPage } from '../utils/pages';
import { sortAndSearchItems } from '../utils/filters';


const Home = () => {
  
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {items, isLoadingPosts, searchTitlePost, sortBy, users, errorPosts} = useSelector(({posts, filters, users}) => {
    return {
      items: posts.items,
      isLoadingPosts: posts.isLoadingPosts,
      errorPosts: posts.errorPosts,
      searchTitlePost: filters.searchTitlePost,
      sortBy: filters.sortBy,
      users: users.users,
    }
  });

  //загрузка пользователей и постов
  useEffect(() => {
    dispatch(asyncFetchUsers());
    dispatch(asyncFetchPosts());
  }, []);

  //изменение отображаемой страницы при поиске по заголовку
  useEffect(() => {
    if (resultPostsFromPage.length === 0) {
      changePage(1);
    }
  }, [searchTitlePost])
  
  //посты после сортировки и фильтрации
  const resultItemsPosts = sortAndSearchItems(items,sortBy,searchTitlePost);

  //посты на выбранной странице  
  const resultPostsFromPage = selectPostsFromPage(resultItemsPosts, page, limit);

  //подсчет количества страниц
  const totalPages = getPagesCount(resultItemsPosts.length, limit);
  
  //обновление номера страницы и вывод нужной страницы
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
    }
  }
  
  if (!isLoadingPosts) {
    return (
      <>
        <h1 className='mainTitle'>Список постов</h1>
        <LoaderPost />
      </>
    );
  }

  return (
    <>
      <h1 className='mainTitle'>Список постов</h1>
      {!errorPosts.isError
        ?
          <>
          <PostList resultPostsFromPage={resultPostsFromPage} users={users}/>
          <PaginationPosts totalPages={totalPages} page={page} changePage={changePage}/>
          </>
        :
          <Error errorMessage={errorPosts.errorMessage}/>
      }
    </>
  );
}

export default Home;