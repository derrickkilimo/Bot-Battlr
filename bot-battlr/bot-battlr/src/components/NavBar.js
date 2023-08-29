import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
        <Navbar.Brand> THE BOT COLLECTION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/BotArmy">Bot Collection</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;
