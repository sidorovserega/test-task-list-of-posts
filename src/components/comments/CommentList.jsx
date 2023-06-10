import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchCommentsByPost } from '../../redux/actions/comments';

import LoaderComments from '../loaders/LoaderComments';
import CommentItem from './CommentItem';
import { ListGroup } from 'react-bootstrap';


const CommentsList = ({postId}) => {
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchCommentsByPost(postId));
  }, []);

  const {commentsByPost} = useSelector(({comments}) => ({
    commentsByPost: comments.comments.filter(comment => comment.postId === postId)
  }));

  if (!commentsByPost) return <LoaderComments />
  
  return (
    <ListGroup className='commentsList'>
      {
        commentsByPost.map(comment => 
          <CommentItem key={comment.id} comment={comment}/>
        )
      }
    </ListGroup>
  )
}

export default CommentsList;