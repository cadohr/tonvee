import React from 'react';
import { Form } from '@unform/web';
import { Input } from '~/components/Form';
import { Container, Tabs, Button } from './styles';

export default function Sign() {
  return (
    <>
      <Container>
        <Tabs>Login</Tabs>
        <Tabs>Cadastrar</Tabs>
        <Form>
          <Input label="email" name="email" />
          <Input label="password" name="password" />
          <Button>Entrar</Button>
        </Form>
        <a href="#">Esqueceu a senha?</a>
        <span>Ou</span>
      </Container>
    </>
  );
}
