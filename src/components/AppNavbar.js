// AppNavbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ({activePage}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Laboratorio</Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link><FontAwesomeIcon icon={faHouse} /></Nav.Link>
          <Nav.Link>Profile</Nav.Link>
          <Nav.Link>Works</Nav.Link>
          <Nav.Link>Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
};