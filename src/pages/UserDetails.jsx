import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchPostsByUser } from '../redux/actions/posts';

import LoaderPost from '../components/loaders/LoaderPost';
import LoaderUser from '../components/loaders/LoaderUser';
import CardUser from '../components/CardUser';

import { Card } from 'react-bootstrap';
import { sortAndSearchItems } from '../utils/filters';
import { asyncFetchByUser } from '../redux/actions/users';
import Error from '../components/Error';
import PostList from '../components/Posts/PostList';


const UserDetails = () => {
  
  const userID = Number(useParams().id);
  const dispatch = useDispatch();
  
  const {users, isLoadingUser, userPosts, isLoadingPosts, searchTitlePost, sortBy, errorPosts, errorUser} = useSelector(({users, posts, filters}) => {
    return {
      users: users.users,
      isLoadingUser: users.isLoadingUser, 
      errorUser: users.errorUser,
      userPosts: posts.items.filter(post => post.userId === userID),
      isLoadingPosts: posts.isLoadingPosts,
      errorPosts: posts.errorPosts,
      searchTitlePost: filters.searchTitlePost,
      sortBy: filters.sortBy,
    }
  })

  useEffect(() => {
    dispatch(asyncFetchByUser(userID));
    dispatch(asyncFetchPostsByUser(userID));
  }, []);

  //посты после сортировки и фильтрации
  const resultPostsByUser = sortAndSearchItems(userPosts, sortBy, searchTitlePost);
  
  if (!isLoadingUser) {
    return (<LoaderUser />); 
  }

  return (
    <Card text="black" className="userDetails">
      {errorUser.isError
        ?
          <Error errorMessage={errorUser.errorMessage}/>
        :
          <>
            <CardUser user={users.find(user => user.id === userID)}/>
            {     
              isLoadingPosts
                ?
                  
                  !errorPosts.isError
                  ?
                    <PostList resultPostsFromPage={resultPostsByUser} users={users}/>
                  :
                    <Error errorMessage={errorPosts.errorMessage}/>
                  
                :
                  <LoaderPost />
            }
          </>
      }
    </Card>
  );
}

export default UserDetails;