import React from 'react'
import { Card, Nav } from 'react-bootstrap';
import avatarUser from '../assets/img/avatar-user.svg';

const About = () => {
  
  return (
    <Card className='cardAbout'>
      <Card.Img variant="top" src={avatarUser} className='imageAbout'/>
      <Card.Body>
        <Card.Title>Сидоров Сергей</Card.Title>
        <Card.Text>
          Здравствуйте! Я начинающий Frontend-разработчик. 
          Проработав долгое время на государственной службе, осознал, что мое развитие остановилось, 
          принял решение сменить профессию. Выбрал направление Frontend-разработки из-за личной симпатии к данному направлению, 
          возможности постоянного роста и развития своих профессиональных навыков, карьерного роста, отсутствия бюрократической волокиты.
          В процессе обучения сделал несколько учебных проектов, с которыми можно ознакомиться в репозитории GitHub: 
          <Nav.Link className='linkAbout' href="https://github.com/sidorovserega" target="_blank">https://github.com/sidorovserega</Nav.Link>
          Резюме: 
          <Nav.Link className='linkAbout' href="https://drive.google.com/file/d/1ZWg-iRDe-3KFH_lBzY3LSDV8d88i_Tq6/view?usp=drive_link" target="_blank">https://drive.google.com/file/d/1ZWg-iRDe-3KFH_lBzY3LSDV8d88i_Tq6/view?usp=drive_link</Nav.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;