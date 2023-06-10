import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchPostsByUser } from '../redux/actions/posts';

import Post from '../components/Post';
import LoaderPost from '../components/loaders/LoaderPost';
import LoaderUser from '../components/loaders/LoaderUser';
import CardUser from '../components/CardUser';

import { Card } from 'react-bootstrap';
import { sortAndSearchItems } from '../utils/filters';
import { asyncFetchByUser } from '../redux/actions/users';


const UserDetails = () => {
  
  const params = useParams();
  const dispatch = useDispatch();
  
  const {user, isLoadingUser, userPosts, isLoadingPosts, searchTitlePost, sortBy,} = useSelector(({users, posts, filters}) => {
    return {
      user: users.users.find(user => user.id === Number(params.id)),
      isLoadingUser: users.isLoadingUser,  
      userPosts: posts.items.filter(post => post.userId === Number(params.id)),
      isLoadingPosts: posts.isLoadingPosts,
      searchTitlePost: filters.searchTitlePost,
      sortBy: filters.sortBy,
    }
  })

  useEffect(() => {
    dispatch(asyncFetchByUser(Number(params.id)));
    dispatch(asyncFetchPostsByUser(Number(params.id)));
  }, []);

  //посты после сортировки и фильтрации
  const resultPostsByUser = sortAndSearchItems(userPosts, sortBy, searchTitlePost);
  
  return (
    <>
      {
        isLoadingUser
        ?
          <Card
            bg="warning"
            text="black"
            className="userDetails"
          >
            <CardUser user={user}/>
            {isLoadingPosts
              ? 
                resultPostsByUser.map((post, index) => 
                  <Post 
                    title={post.title} body={post.body} postId={post.id} userObj={user} key={`${post.id}_${index}`}
                  />  
                )
              :
                <LoaderPost />
            }
          </Card>
        :
          <LoaderUser />  
      }
    </>
  )
}

export default UserDetails;