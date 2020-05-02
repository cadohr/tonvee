import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Input } from '~/components/Form';
import { signInRequest, signUpRequest } from '~/store/modules/auth/actions';
import { Container, Button } from './styles';
import logo from '../../assets/logo.png';
import 'react-tabs/style/react-tabs.css';

export default function Sign() {
  const dispatch = useDispatch();

  function handleSubmitLogin({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function handleSubmitRegister({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Tabs></Tabs>
      <Container>
        <img className="logo" src={logo} alt="Tonvee" />
        <div className="presentation-text">
          <span className="first-span">
            Lorem ipsum dolor sit amet, consetetur sadipscing
          </span>
          <h1>
            A Nice heading <br /> goes here
          </h1>
          <span className="second-span">Acompanhe eventos em tempo real</span>
        </div>
        <div className="forms-wrapper">
          <div className="tabs-wrapper">
            <Tabs>
              <TabList>
                <Tab className="single-tab">Login</Tab>
                <Tab className="single-tab">Cadastrar</Tab>
              </TabList>
              <TabPanel>
                <Form onSubmit={handleSubmitLogin}>
                  <Input placeholder="Email" name="email" type="email" />
                  <Input placeholder="Senha" name="password" type="password" />
                  <Button>Entrar</Button>
                  <a className="forgot-password" href="/alefe">
                    Esqueceu a senha?
                  </a>
                </Form>
              </TabPanel>
              <TabPanel>
                <Form onSubmit={handleSubmitRegister}>
                  <Input placeholder="Name" name="name" type="text" />
                  <Input placeholder="Email" name="email" type="email" />
                  <Input placeholder="Senha" name="password" type="password" />
                  <Button>Entrar</Button>
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
