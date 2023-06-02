import React from 'react';
import { Card, Figure, Placeholder } from 'react-bootstrap';

const Loader = () => {
  return (
    <div>
      <Card className='mb-10'>
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
    </div>
  )
}

export default Loader;