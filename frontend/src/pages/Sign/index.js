import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Input } from '~/components/Form';
import { signInRequest } from '~/store/modules/auth/actions';
import { Container, Tabs, Button } from './styles';

export default function Sign() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <Tabs>Login</Tabs>
        <Tabs>Cadastrar</Tabs>
        <Form onSubmit={handleSubmit}>
          <Input label="email" name="email" type="email" />
          <Input label="password" name="password" type="password" />
          <Button>Entrar</Button>
        </Form>
        <a href="/alefe">Esqueceu a senha?</a>
        <span>Ou</span>
      </Container>
    </>
  );
}
