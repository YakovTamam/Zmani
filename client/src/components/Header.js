import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineFieldTime } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <AiOutlineFieldTime />
            Zmani
          </Navbar.Brand>
        </LinkContainer>
        <NavDropdown title='התחבר' id='basic-nav-dropdown' align='end'>
          <LinkContainer to='/register'>
            <NavDropdown.Item>להרשמה</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/login'>
            <NavDropdown.Item>כניסה</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/support'>
            <NavDropdown.Item>תמיכה / צור קשר</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
