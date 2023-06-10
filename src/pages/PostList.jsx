import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Post from '../components/Post';
import LoaderPost from '../components/loaders/LoaderPost';
import PaginationPosts from '../components/PaginationPosts';

import { getPagesCount, selectPostsFromPage } from '../utils/pages';
import { sortAndSearchItems } from '../utils/filters';
import { asyncFetchPosts } from '../redux/actions/posts';
import { asyncFetchUsers } from '../redux/actions/users';


const Home = () => {
  
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {items, isLoadingPosts, searchTitlePost, sortBy, users} = useSelector(({posts, filters, users}) => {
    return {
      items: posts.items,
      isLoadingPosts: posts.isLoadingPosts,
      searchTitlePost: filters.searchTitlePost,
      sortBy: filters.sortBy,
      users: users.users
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
  
  return (
    <div>
      <h1 className='mainHeader'>Список постов</h1>
      {isLoadingPosts
        ?
        resultPostsFromPage.map(item => 
          <Post 
            key={item.id} 
            title={item.title} 
            body={item.body}  
            postId={item.id}
            userObj={users.find(user => user.id === item.userId)}
          />
        )
        :
        <LoaderPost />
      }
      <PaginationPosts totalPages={totalPages} page={page} changePage={changePage}/>
    </div>
  )
}

export default Home;