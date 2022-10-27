import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import FormContainer from "../components/FormContainer.js";
import { register } from "../actions/userActions.js";

const RegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("!הסיסמאות לא תואמות");
      return;
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1 className='mt-4'>הרשמה</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='Name' className='mt-2'>
          <Form.Label>שם</Form.Label>
          <Form.Control
            type='name'
            placeholder='הזן שם'
            value={name}
            required
            onChange={e => setName(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='email' className='mt-2'>
          <Form.Label>דואר אלקטרוני</Form.Label>
          <Form.Control
            type='email'
            placeholder='הזן דוא"ל'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='password' className='mt-2'>
          <Form.Label>סיסמא</Form.Label>
          <Form.Control
            type='password'
            placeholder='זמן סיסמא'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword' className='mt-2'>
          <Form.Label>אימות סיסמא</Form.Label>
          <Form.Control
            type='password'
            placeholder='הזן סיסמא בשנית'
            value={confirmPassword}
            required
            onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-4'>
          !הירשם
        </Button>
      </Form>
      <Row className='mt-3'>
        <Col>
          יש לך כבר חשבון?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            התחבר
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
