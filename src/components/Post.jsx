import React, { useState } from 'react';
import { Button, Card, Figure } from 'react-bootstrap';
import avatarUserImage from '../assets/img/avatar-user.svg';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import axios from 'axios';

const Post = ({title, body, postId, userName}) => {
  
  const [activeComments, setActiveComments] = useState(false);
  const [comments, setComments] = useState([]);

  const onClickButton = async () => {
    axios.get(`/posts/${postId}/comments`).
      then(({data}) => setComments([...data]));
    setActiveComments(!activeComments);
  };

  return (
    <div>
      <Card className='mb-10'>
        <Card.Body>
          <Card.Title>{postId} {title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
          <Figure className='d-flex align-items-center'>
                <Link to="UserDetails">
                  <Figure.Image
                    width={100}
                    height={100}
                    alt="avatarImage 100х100"
                    src={avatarUserImage}
                  />
                </Link>
                <Figure.Caption>
                  {userName}
                </Figure.Caption>
              </Figure>
          <Button variant="primary" onClick={onClickButton}>Комментарии</Button>
          {activeComments && 
            comments.map(comment => <Comments key={comment.id} title={comment.email} text={comment.body}/>)
          }
        </Card.Body>
    </Card>
    </div>
  )
}

export default Post;