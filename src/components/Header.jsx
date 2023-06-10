import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setTitlePost } from '../redux/actions/filters';
import { setSortBy } from '../redux/actions/filters';

import { Button, Container, Dropdown, DropdownButton, Figure, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import avatarImage from '../assets/img/avatar-scaled.jpeg';


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

  const burgerMenuClose = () => {
    const buttonCloseBurgerMenu = document.querySelector('.btn-close');
    buttonCloseBurgerMenu.click();
  }

  return (
    <header>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle />
          <Button className='sortButton' onClick={() => onSortPosts('start')} variant="outline-primary">
            <span className='sort sortDown'></span>
          </Button>
          <Button className='sortButton' onClick={() => onSortPosts('end')} variant="outline-primary">
            <span className='sort sortUp'></span>
          </Button>
          <DropdownButton className="dropdownMenu" title={"Сортировка постов по заголовку"}>
            <Dropdown.Item onClick={() => onSortPosts('start')}>Сортировка по убыванию</Dropdown.Item>
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
          <Navbar.Offcanvas placement="start">
            <Offcanvas.Header className='burgerMenuClose' closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Figure className='d-flex align-items-center'>
                <Link className='headerMenu-link' to="/About">
                  <Figure.Image
                    width={100}
                    height={100}
                    alt="avatarImage 100х100"
                    src={avatarImage}
                    onClick={burgerMenuClose}
                  />
                </Link>
                <Figure.Caption className='captionAbout'>
                  Сидоров Сергей г. Пенза
                </Figure.Caption>
              </Figure>
              <Nav>
                <Link onClick={burgerMenuClose} className='headerMenu-link' to="/">
                  Список постов
                </Link>
                <Link onClick={burgerMenuClose} className='headerMenu-link' to="/About">
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