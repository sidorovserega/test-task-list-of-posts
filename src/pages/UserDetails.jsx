import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Post from '../components/Post';
import { useEffect } from 'react';
import { fetchUserBy } from '../redux/actions';
import Loader from '../components/Loader';
import { fetchPostsByUser } from '../redux/actions/posts';
import { sortAndSearchItems } from '../utils/filters';

const UserDetails = () => {
  const params = useParams();
  const {user, userPosts, isLoading, searchTitlePost, sortBy,} = useSelector(({users, posts, filters}) => {
    return {
      user: users.users.find(user => user.id === Number(params.id)), 
      userPosts: posts.items.filter(post => post.userId === Number(params.id)),
      isLoading: posts.isLoading,
      searchTitlePost: filters.searchTitlePost,
      sortBy: filters.sortBy,
    }
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserBy(Number(params.id)));
    dispatch(fetchPostsByUser(Number(params.id)));
  }, []);

  //посты после сортировки и фильтрации
  const resultPostsByUser = sortAndSearchItems(userPosts, sortBy, searchTitlePost);

  if (!user) {
    return <Loader />
  }
  
  return (
    <Card
    bg="warning"
    text="black"
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>{user.name}</Card.Header>
    <Card.Body>
      <Card.Title>Адрес проживания</Card.Title>
      <Card.Text>
        {user.address.city}, {user.address.street}, {user.address.suite}
      </Card.Text>
      <Card.Title>Контактные данные</Card.Title>
      <Card.Text>
        {user.phone}, {user.website}, {user.email}
      </Card.Text>
    </Card.Body>
    <Link to="/posts">
      <Button variant="primary">Назад</Button>
    </Link>
    
    {isLoading 
    ? 
      resultPostsByUser.map((post, index) => 
        <Post 
          title={post.title} body={post.body} postId={post.id} userId={post.userId} key={`${post.id}_${index}`}
        />  
      )
    :
      Array(5).fill(0).map((_, index) => <Loader key={index}/>)
    }
  </Card>
  )
}

export default UserDetails;