import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card, Figure } from 'react-bootstrap';
import avatarUserImage from '../assets/img/avatar-user.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsByPost } from '../redux/actions/comments';
import CommentList from './comments/CommentList';


const Post = ({title, body, postId, userId, userName}) => {
  
  const [activeComments, setActiveComments] = useState(false);
  
  const dispatch = useDispatch();

  const {commentsByPost} = useSelector(({comments}) => {
    return {
      commentsByPost: comments.comments.filter(comment => comment.postId === postId)
    }
  });

  const onClickButton = async () => {
    dispatch(fetchCommentsByPost(postId));
    setActiveComments(!activeComments);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Card className='mb-10 card-post'>
        
        <Card.Body className='cardPostBody'>
          <Card.Title>{postId}. {title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="primary" onClick={onClickButton}>Комментарии</Button>
          {activeComments && <CommentList commentsByPost={commentsByPost}/>}
        </Card.Body>

        <Card.Body className='cardPostUser'>
          <Figure>
            <Figure.Image
              width={100}
              height={100}
              alt="avatarImage 100х100"
              src={avatarUserImage}
              onClick={() => navigate(`/users/${userId}`)}
            />
            <Figure.Caption className='userNameToPost'>{userName}</Figure.Caption>
          </Figure>
          
        </Card.Body>

    </Card>
    </div>
  )
}

export default Post;