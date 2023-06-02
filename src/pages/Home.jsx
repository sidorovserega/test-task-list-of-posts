import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { fetchUsers, fetchPosts } from '../redux/actions/index';

const Home = () => {
  
  const {items, isLoading, users} = useSelector(({posts, users}) => {
    return {
      items: posts.items,
      isLoading: posts.isLoading,
      users: users.users
      // sortBy: filters.sortBy,
      // category: filters.category,
      // basketItems: basket.items
    }
  });

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Список постов</h1>
      {isLoading
        ?
          items.map(item => 
            <Post 
              key={item.id} 
              title={item.title} 
              body={item.body}  
              postId={item.id}
              userName={users.find(user => user.id === item.userId).name}
            />
          )
        :
          ""  // Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
      }
    </div>
  )
}

export default Home;