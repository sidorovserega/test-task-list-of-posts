import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const Loader = () => {
  
  return (
    Array(5).fill(0).map((_, index) => 
      <Card key={index} className='mb-10'>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>         
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>   
          <Placeholder.Button variant="primary" xs={2} />
        </Card.Body>
      </Card>
    )
  )
}

export default Loader;