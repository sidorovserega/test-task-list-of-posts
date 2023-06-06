import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const Loader = () => {
  
  return (
      <Card style={{ width: '18rem' }}>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>         
      </Card>
  )
}

export default Loader;