import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchCommentsByPost } from '../../redux/actions/comments';

import LoaderComments from '../loaders/LoaderComments';
import CommentItem from './CommentItem';
import Error from '../Error';
import { ListGroup } from 'react-bootstrap';


const CommentsList = ({postId}) => {
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchCommentsByPost(postId));
  }, []);

  const {commentsByPost, errorMessage} = useSelector(({comments}) => ({
    commentsByPost: comments.comments.filter(comment => comment.postId === postId),
    errorMessage: comments.errors.find(error => error.postId === postId) ? comments.errors.find(error => error.postId === postId).errorMessage : ''
  }));

  if (!commentsByPost) return <LoaderComments />
  
  return (
    <ListGroup className='commentsList'>
      {!errorMessage
        ?
          commentsByPost.map(comment => 
            <CommentItem key={comment.id} comment={comment}/>
          )
        :
          <Error errorMessage={errorMessage}/>
      }
    </ListGroup >
  )
}

export default CommentsList;