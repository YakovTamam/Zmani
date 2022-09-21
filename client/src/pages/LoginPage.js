import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader.js";
import FormContainer from "../components/FormContainer.js";
import { login } from "../actions/userActions.js";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connectWithPhone, setConnectWithPhone] = useState(true);

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const ChangeConnectHandler = e => {
    setConnectWithPhone(!connectWithPhone);
  };

  return (
    <FormContainer>
      <h1 className='mt-4'>כניסה</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        {connectWithPhone ? (
          <Form.Group controlId='phone' className='mt-4'>
            <Form.Label>הזן טלפון</Form.Label>
            <Form.Control
              type='number'
              placeholder='05xxxxxxxx'
              style={{ textAlign: "end" }}
              value={password}
              onChange={e => setPassword(e.target.value)}></Form.Control>
          </Form.Group>
        ) : (
          <>
            <Form.Group controlId='email' className='mt-4'>
              <Form.Label>הזן דוא"ל</Form.Label>
              <Form.Control
                type='email'
                placeholder='zmani@zmani.com'
                style={{ textAlign: "end" }}
                value={email}
                onChange={e => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='phone' className='mt-4'>
              <Form.Label>הזן סיסמה</Form.Label>
              <Form.Control
                type='password'
                placeholder='*********'
                style={{ textAlign: "end" }}
                value={password}
                onChange={e => setPassword(e.target.value)}></Form.Control>
            </Form.Group>{" "}
            <Row className='mt-2'>
              <Col>
                שחכת סיסמה?{" "}
                <Link to={redirect ? `/forgotpassword` : "/forgotpassword"}>
                  לחץ כאן{" "}
                </Link>
              </Col>
            </Row>
          </>
        )}

        <Button type='submit' variant='primary' className='mt-5'>
          !היכנס
        </Button>
      </Form>
      <Row className='mt-5'>
        <Col>
          <Button
            variant='link'
            onClick={e => ChangeConnectHandler(e.target.value)}>
            לחץ
          </Button>
          {connectWithPhone
            ? "להתחברות עם דואל וסיסמה"
            : "להתחברות עם מספר טלפון"}
        </Col>
      </Row>
      {connectWithPhone ? (
        <Row className='mt-5'>
          <Col>
            משתמש חדש?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}>
              לחץ להרשמה{" "}
            </Link>
          </Col>
        </Row>
      ) : null}
    </FormContainer>
  );
};

export default LoginPage;
