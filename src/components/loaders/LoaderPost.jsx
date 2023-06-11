import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const Loader = () => {
  
  return (
    Array(5).fill(0).map((_, index) => 
      <Card key={index} className='cardPost'>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder className='postPlaceholder'/>
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder className='postPlaceholder' />
          </Placeholder>         
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder className='postPlaceholder' />
          </Placeholder>   
          <Placeholder.Button variant='warning' className='buttonPost' />
        </Card.Body>
      </Card>
    )
  );
}

export default Loader;