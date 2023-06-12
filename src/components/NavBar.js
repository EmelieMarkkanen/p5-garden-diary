import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import logo from "../assets/Plant logo small.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
    }
  };


  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >Add a diary entry
    </NavLink>
  );

  const loggedInIcons = <>
      <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/items"
    >Shoppinglist
    </NavLink>
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/tasks"
    >To-do list
    </NavLink>
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/plants"
    >My plants
    </NavLink>
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/following"
    >Following
    </NavLink>
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/liked"
    >Liked entries
    </NavLink>
    <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>Sign out
    </NavLink>
    <NavLink
      className={styles.NavLink}
      to={`/profiles/${currentUser?.profile_id}`}
    >
      <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
    </NavLink>

  </>;

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <Image src={logo} roundedCircle alt='logo' height={45} className={styles.Logo} title="Home" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)} 
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;