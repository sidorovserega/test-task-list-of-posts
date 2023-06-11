import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({errorMessage}) => {
  
  return (
    <Alert variant='warning' className='card-post'>
      {errorMessage}
    </Alert>
  );
}

export default Error;