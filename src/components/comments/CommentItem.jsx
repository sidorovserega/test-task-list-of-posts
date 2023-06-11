import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const CommentItem = ({comment}) => {
  
  return (
    <ListGroup.Item className='commentItem'>
      <Card className='commentItem-card'>
        <Card.Title className='cardTitle'>{comment.email}</Card.Title>
        <Card.Text className='cardText'>{comment.body}</Card.Text>
      </Card>
    </ListGroup.Item>
  )
}

export default CommentItem;