import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardUser = ({user}) => {
  return (
    <>
      <Card.Header>{user.name}</Card.Header>
        <Card.Body>
          <Card.Title>Адрес проживания</Card.Title>
          <Card.Text>
            {user.address.city}, {user.address.street}, {user.address.suite}
          </Card.Text>
          <Card.Title>Контактные данные</Card.Title>
          <Card.Text>
            Телефон: {user.phone}
          </Card.Text>
          <Card.Text>
            Email: {user.email}
          </Card.Text>
          <Card.Text>
            Веб-сайт: {user.website}
          </Card.Text>
        </Card.Body>
        <Link to="/posts">
          <Button variant="primary" className='buttonUserDetails'>Назад</Button>
        </Link>
    </>
  )
}

export default CardUser;