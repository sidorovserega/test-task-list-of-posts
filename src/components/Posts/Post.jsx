import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card, Figure } from 'react-bootstrap';
import avatarUserImage from '../../assets/img/avatar-user.svg';
import CommentList from '../comments/CommentList';


const Post = React.memo(({title, body, postId, userObj}) => {
  
  const [activeComments, setActiveComments] = useState(false);

  const onClickButton = () => {
    setActiveComments(!activeComments);
  };

  const onClickImage = () => {
    navigate(`/users/${userObj.id}`);
  }

  const navigate = useNavigate();
  
  return (
      <Card className='mb-10 cardPost'>
        <Card.Body className='cardPostBody'>
          <Card.Title>{postId}. {title}</Card.Title>
          <Card.Text className=''>{body}</Card.Text>
          <Button variant='warning' onClick={onClickButton} className='buttonPost'>Комментарии</Button>
          {activeComments && <CommentList postId={postId}/>}
        </Card.Body>

        <Card.Body className='cardPostUser'>
          <Figure className='figure'>
            <Figure.Image
              width={100}
              height={100}
              alt="avatarImage 100х100"
              src={avatarUserImage}
              onClick={onClickImage}
            />
            <Figure.Caption className='userNameToPost'>{userObj ? userObj.name : ''}</Figure.Caption>
          </Figure>
        </Card.Body>
    </Card>
  );
});

export default Post;