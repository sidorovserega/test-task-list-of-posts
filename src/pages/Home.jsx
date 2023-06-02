import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { fetchUsers, fetchPosts } from '../redux/actions/index';
import Loader from '../components/Loader';

const Home = () => {
  
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

  const sortPostToTitle = (a, b) => {
    if (sortBy === 'start') {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
    return -a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  };

  return (
    <div>
      <h1>Список постов</h1>
      {isLoading
        ?
          items
            .filter(item => searchTitlePost !== "" ? item.title.toLowerCase().includes(searchTitlePost.toLowerCase()) : item)
            .sort((a, b) => sortPostToTitle(a, b))
            .map(item => 
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
    </div>
  )
}

export default Home;