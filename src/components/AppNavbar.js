// AppNavbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ({appData, setAppData}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Laboratorio</Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link onClick={()=>setAppData({...appData, activePage: 'home'})}><FontAwesomeIcon icon={faHouse} /></Nav.Link>
          <Nav.Link onClick={()=>setAppData({...appData, activePage: 'profile'})}>Profile</Nav.Link>
          <Nav.Link onClick={()=>setAppData({...appData, activePage: 'works'})}>Works</Nav.Link>
          <Nav.Link onClick={()=>setAppData({...appData, activePage: 'settings'})}>Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
};