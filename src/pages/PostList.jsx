import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchUsers} from '../redux/actions/index';

import Post from '../components/Post';
import LoaderPost from '../components/loaders/LoaderPost';
import PaginationPosts from '../components/PaginationPosts';

import { getPagesCount, selectPostsFromPage } from '../utils/pages';
import { sortAndSearchItems } from '../utils/filters';


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

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, []);
  
  //посты после сортировки и фильтрации
  const resultItemsPosts = sortAndSearchItems(items,sortBy,searchTitlePost);

  //посты на выбранной странице  
  const resultPostsFromPage = selectPostsFromPage(resultItemsPosts, page, limit);

  //подсчет количества страниц
  const totalPages = getPagesCount(resultItemsPosts.length, limit);
  
  //обновление номера страницы и вывод нужной страницы
  const changePage = (page) => {
    setPage(page);
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
            userId={item.userId}
            userName={users.find(user => user.id === item.userId).name}
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