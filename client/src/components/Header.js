import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineFieldTime } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const business = useSelector(state => state.business);
  const { info } = business;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <AiOutlineFieldTime />
            Zmani
          </Navbar.Brand>
        </LinkContainer>
        {business ? (
          <NavDropdown
            title={info.businessName}
            id='basic-nav-dropdown'
            align='end'>
            <LinkContainer to='/mypage'>
              <NavDropdown.Item>העמוד שלי</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/business-setting'>
              <NavDropdown.Item>הגדרת עסק</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/login'>
              <NavDropdown.Item onClick={logoutHandler}>התנתק</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to='/support'>
              <NavDropdown.Item>תמיכה / צור קשר</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        ) : (
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
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
