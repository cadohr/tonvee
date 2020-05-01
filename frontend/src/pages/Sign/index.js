import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Input } from '~/components/Form';
import { signInRequest } from '~/store/modules/auth/actions';
import { registerInRequest } from '~/store/modules/register/actions';
import { Container, Tabs, Button } from './styles';
import logo from '../../assets/logo.png';

export default function Sign() {
  const dispatch = useDispatch();

  function handleSubmitLogin({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function handleSubmitRegister({ name, email, password }) {
    dispatch(registerInRequest(name, email, password));
  }

  return (
    <>
      <Container>
<<<<<<< Updated upstream
        <img className="logo" src={logo} alt="Tonvee" />
        <div className="presentation-text">
          <span className="first-span">
            Lorem ipsum dolor sit amet, consetetur sadipscing
          </span>
          <h1>
            A Nice heading <br /> goes here
          </h1>
=======
        <div className="presentation-text">
          <img className="logo" src={logo}></img>
          <span className="first-span">Lorem ipsum dolor sit amet, consetetur sadipscing</span>
          <h1>A Nice heading <br/> goes here</h1>
>>>>>>> Stashed changes
          <span className="second-span">Acompanhe eventos em tempo real</span>
        </div>
        <div className="forms-wrapper">
          <div className="tabs-wrapper">
            <Tabs>Login</Tabs>
            <Tabs>Cadastrar</Tabs>
          </div>
          <Form onSubmit={handleSubmitLogin}>
            <Input placeholder="Email" name="email" type="email" />
            <Input placeholder="Senha" name="password" type="password" />
            <Button>Entrar</Button>
          </Form>
          <a className="forgot-password" href="/alefe">
            Esqueceu a senha?
          </a>
        </div>
        <Form onSubmit={handleSubmitRegister}>
          <Input placeholder="Name" name="name" type="text" />
          <Input placeholder="Email" name="email" type="email" />
          <Input placeholder="Senha" name="password" type="password" />
          <Button>Entrar</Button>
        </Form>
      </Container>
    </>
  );
}
