import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const Loader = () => {
  
  return (
    <div>
      <Card>
        <Card.Body className='userDetails'>
          <Placeholder as={Card.Title} animation="glow" >
            <Placeholder className='userPlaceholder' />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder className='userPlaceholder' />
          </Placeholder>         
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder className='userPlaceholder' />
          </Placeholder>   
          <Placeholder.Button variant='warning' className='buttonUserDetails buttonUserLoader'/>
        </Card.Body>
    </Card>
    </div>
  );
}

export default Loader;