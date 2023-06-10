import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card, Figure } from 'react-bootstrap';
import avatarUserImage from '../assets/img/avatar-user.svg';
import CommentList from './comments/CommentList';


const Post = ({title, body, postId, userObj}) => {
  
  const [activeComments, setActiveComments] = useState(false);

  const onClickButton = () => {
    setActiveComments(!activeComments);
  };

  const onClickImage = () => {
    navigate(`/users/${userObj.id}`);
  }

  const navigate = useNavigate();
  
  return (
      <Card className='mb-10 card-post'>
        <Card.Body className='cardPostBody'>
          <Card.Title>{postId}. {title}</Card.Title>
          <Card.Text className=''>{body}</Card.Text>
          <Button variant="primary" onClick={onClickButton}>Комментарии</Button>
          {activeComments && <CommentList postId={postId}/>}
        </Card.Body>

        <Card.Body className='cardPostUser'>
          <Figure>
            <Figure.Image
              width={100}
              height={100}
              alt="avatarImage 100х100"
              src={avatarUserImage}
              onClick={onClickImage}
            />
            <Figure.Caption className='userNameToPost'>{userObj ? userObj.name : 'Загрузка имени'}</Figure.Caption>
          </Figure>
        </Card.Body>
    </Card>
  )
}

export default Post;