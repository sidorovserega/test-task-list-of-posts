import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton, Figure, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import avatarImage from '../assets/img/avatar-scaled.jpeg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTitlePost } from '../redux/actions';
import { setSortBy } from '../redux/actions/filters';


const Header = () => {
  const [seachTitle, setSeachTitle] = useState("");

  const dispatch = useDispatch();

  const onSearchTitlePosts = (e) => {
    setSeachTitle(e.target.value);
    dispatch(setTitlePost(e.target.value));
  }

  const onSortPosts = (type) => {
    dispatch(setSortBy(type));
  }

  return (
    <header>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <DropdownButton id="dropdown" title={"Сортировка постов по заголовку"}>
            <Dropdown.Item onClick={() => onSortPosts("start")}>Сортировка по убыванию</Dropdown.Item>
            <Dropdown.Item onClick={() => onSortPosts('ent')}>Сортировка по возрастанию</Dropdown.Item>
          </DropdownButton>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search title"
              value={seachTitle}
              onChange={onSearchTitlePosts}
            />
          </Form>
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