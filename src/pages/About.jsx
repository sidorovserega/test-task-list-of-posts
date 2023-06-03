import React from 'react'
import { Card } from 'react-bootstrap';
import avatarUser from '../assets/img/avatar-user.svg';

const About = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatarUser} />
      <Card.Body>
        <Card.Title>Сидоров Сергей</Card.Title>
        <Card.Text>
          Здравствуйте! Я начинающий Frontend-разработчик. 
          Проработав долгое время на государственной службе, осознал, что мое развитие остановилось, 
          принял решение сменить профессию. Выбрал направление Frontend-разработки из-за личной симпатии к данному направлению, 
          возможности постоянного роста и развития своих профессиональных навыков, карьерного роста, отсутствия бюрократической волокиты.
          В процессе обучения сделал несколько учебных проектов, с которыми можно ознакомиться...
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default About;