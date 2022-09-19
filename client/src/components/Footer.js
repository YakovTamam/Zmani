import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineFieldTime } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <strong>
              Copyright &copy; Zmani <AiOutlineFieldTime />
            </strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
