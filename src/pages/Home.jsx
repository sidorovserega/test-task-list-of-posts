import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchPosts } from '../redux/actions/index';

import Post from '../components/Post';
import Loader from '../components/Loader';
import PaginationPosts from '../components/PaginationPosts';

import { getPagesCount, selectPostsFromPage } from '../utils/pages';
import { sortAndSearchItems } from '../utils/filters';


const Home = () => {
  
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const {items, isLoading, users, searchTitlePost, sortBy} = useSelector(({posts, users, filters}) => {
    return {
      items: posts.items,
      isLoading: posts.isLoading,
      users: users.users,
      searchTitlePost: filters.searchTitlePost,
      sortBy: filters.sortBy,
    }
  });

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, []);

  //посты после сортировки и фильтрации
  const resultItemsPosts = sortAndSearchItems(items,sortBy,searchTitlePost);

  //посты на выбранной странице  
  const resultPostsFromPage = selectPostsFromPage(resultItemsPosts, page, limit);

  //подсчет количества страниц
  const totalPages = getPagesCount(items.length, limit);
  
  //обновление номера страницы и вывод нужной страницы
  const changePage = (page) => {
    setPage(page);
  }
  
  return (
    <div>
      <h1>Список постов</h1>
      {isLoading
        ?
        resultPostsFromPage.map(item => 
          <Post 
            key={item.id} 
            title={item.title} 
            body={item.body}  
            postId={item.id}
            userName={users.find(user => user.id === item.userId).name}
          />
        )
        :
        Array(5).fill(0).map((_, index) => <Loader key={index}/>)
      }

      <PaginationPosts totalPages={totalPages} page={page} changePage={changePage}/>
    </div>
  )
}

export default Home;