import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import { Input } from '~/components/Form';
import { signInRequest, signUpRequest } from '~/store/modules/auth/actions';
import { Container, Button } from './styles';
import logo from '../../assets/logo.png';
import 'react-tabs/style/react-tabs.css';

export default function Sign() {
  const dispatch = useDispatch();
  const tabRef = useRef(null);

  function handleSubmitLogin({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function handleSubmitRegister({ name, email, password }, { reset }) {
    dispatch(signUpRequest(name, email, password));

    tabRef.current.node.click();

    reset();
  }

  return (
    <>
      <Container>
        <div className="presentation-text">
          <img className="logo" src={logo} alt="Tonvee" />
          {/* <span className="first-span">
          Feira do Empreendedor
          </span> */}
          <h1>
            Feira do <br /> Empreendedor
          </h1>
          <span className="second-span">Evento da PEGN e Época negócios.</span>
        </div>
        <div className="forms-wrapper">
          <div className="tabs-wrapper">
            <Tabs>
              <TabList>
                <Tab className="single-tab" ref={tabRef}>
                  Login
                </Tab>
                <Tab className="single-tab">Cadastrar</Tab>
              </TabList>
              <TabPanel>
                <Form onSubmit={handleSubmitLogin}>
                  <Input placeholder="Email" name="email" type="email" />
                  <Input placeholder="Senha" name="password" type="password" />
                  <Button>Entrar</Button>
                  <Link className="forgot-password" to="/profile">
                    Esqueceu a senha?
                  </Link>
                </Form>
              </TabPanel>
              <TabPanel>
                <Form onSubmit={handleSubmitRegister}>
                  <Input placeholder="Name" name="name" type="text" />
                  <Input placeholder="Email" name="email" type="email" />
                  <Input placeholder="Senha" name="password" type="password" />
                  <Button>Cadastrar</Button>
                </Form>
              </TabPanel>
            </Tabs>
            {/* <Tabs>Login</Tabs>
            <Tabs>Cadastrar</Tabs> */}
          </div>
        </div>
      </Container>
    </>
  );
}
