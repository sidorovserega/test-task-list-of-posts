import React from 'react'
import LoaderComments from '../loaders/LoaderComments';
import CommentItem from './CommentItem';
import { ListGroup } from 'react-bootstrap';

const CommentsList = ({commentsByPost}) => {
  
  if (!commentsByPost) return <LoaderComments />
  
  return (
    <ListGroup className='commentsList'>
      {
        commentsByPost.map((comment, index) => 
          <CommentItem key={comment.id} comment={comment}/>
        )
      }
    </ListGroup>
  )
}

export default CommentsList;