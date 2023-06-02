import React from 'react';
import { Container, Figure, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import avatarImage from '../assets/img/avatar-scaled.jpeg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Figure className='d-flex align-items-center'>
                <Figure.Image
                  width={100}
                  height={100}
                  alt="avatarImage 100х100"
                  src={avatarImage}
                />
                <Figure.Caption>
                  Сидоров Сергей г. Пенза
                </Figure.Caption>
              </Figure>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/">
                  Список постов
                </Link>
                <Link to="/About">
                  Обо мне
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;