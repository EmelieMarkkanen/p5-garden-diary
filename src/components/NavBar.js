import React from 'react';
import {Navbar, Container, Nav}  from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import logo from '../assets/Plant logo small.png';
import styles from '../styles/NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
<Navbar className={styles.NavBar} expand="md" fixed='top'>
    <Container>
      <NavLink to='/'>
  <Navbar.Brand><Image src={logo} roundedCircle alt='logo' height={45} className={styles.Logo}/>
  </Navbar.Brand></NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to='/'>Home</NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/signin'>Sign in</NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/signup'>Sign up</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar