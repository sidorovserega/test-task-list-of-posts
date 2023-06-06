import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBy } from '../redux/actions';
import { fetchPostsByUser } from '../redux/actions/posts';

import Post from '../components/Post';
import LoaderPost from '../components/loaders/LoaderPost';
import LoaderUser from '../components/loaders/LoaderUser';
import CardUser from '../components/CardUser';

import { Card } from 'react-bootstrap';
import { sortAndSearchItems } from '../utils/filters';


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
    dispatch(fetchUserBy(Number(params.id)));
    dispatch(fetchPostsByUser(Number(params.id)));
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
                    title={post.title} body={post.body} postId={post.id} userId={post.userId} key={`${post.id}_${index}`}
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