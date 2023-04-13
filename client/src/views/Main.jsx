/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../styles/main.css';
import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputMain from '../components/forms/InputMain';
import { ButtonPrimary } from '../components/buttons';
import { background, color } from '../styles/colors';
import { Register, Login } from '../actions';
import { AlertBasic } from '../components/alerts';

function Main({ Register, modal, Login }) {
  const [authCondition, setAutCondition] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleCondition = () => {
    if (authCondition) {
      setAutCondition(false);
    } else {
      setAutCondition(true);
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (authCondition) {
      Register(form, setAutCondition);
    } else {
      Login(form, navigate);
    }
  };

  return (
    <Container>
      <div className="circle-background" />
      <Row className="mt-100">
        <Col xl={7} className="mb-3">
          <h1 className="title">Welcome to Calculator Web</h1>
          <p className="desc mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, voluptatem et, iusto
            libero nostrum esse vitae consequatur eligendi officia provident dolore, ducimus nihil
            quibusdam cupiditate nesciunt culpa! Molestias, molestiae dicta?
          </p>
        </Col>
        <Col xl={5} className={authCondition ? 'mb-5' : 'mb-3'}>
          <Card className="card-container">
            <Card.Header>
              <Card.Title>
                <h3>Calculator</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-5">
              {modal && modal.status && <AlertBasic type={modal.variant} message={modal.message} />}
              <Form onSubmit={submit}>
                {authCondition && (
                  <InputMain
                    onChange={(e) => onChange(e)}
                    label="Nama"
                    name="name"
                    placeholder="Masukan Nama"
                    type="text"
                  />
                )}
                <InputMain
                  onChange={(e) => onChange(e)}
                  label="Email"
                  name="email"
                  placeholder="Masukan Email"
                  type="email"
                />
                <InputMain
                  onChange={(e) => onChange(e)}
                  label="Password"
                  name="password"
                  placeholder="Masukan Password"
                  type="password"
                />
                <div className="mt-4">
                  <ButtonPrimary
                    type="submit"
                    label={authCondition ? 'Register' : 'Login'}
                    width="100%"
                    background={background.primary}
                    color={color.primary}
                  />
                </div>
                <div className="text-center mt-4">
                  <p>
                    {!authCondition ? "Are you don't have account ?" : 'Are you have account ?'}{' '}
                    <span className="link-footer" onClick={handleCondition}>
                      {!authCondition ? 'Sign Out' : 'Sign In'}{' '}
                    </span>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapToProps = (state) => {
  return {
    modal: state.modal.showModalAlert
  };
};

export default connect(mapToProps, { Register, Login })(Main);
