import React from 'react'
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  }

  return (
    <Container className='login-area'>
      <div className='desc'>
        <h2>로그인</h2>
        <p>사업자 전용 쇼핑몰은 회원가입 된 사업자 분들만 사용이 가능합니다.</p>
      </div>
      <Form className='login-form' onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color: "#142F5F"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{color: "#142F5F"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button style={{backgroundColor: "#142F5F"}} type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login
