import React from 'react';
import { Form } from '@unform/web';
import { Container, Title, Button, Formwrapper } from './styles';
import { Input } from '~/components/Form';
import Profimg from '../../assets/pageProfile/meu_perfil.svg';
import Picture from '../../assets/pageProfile/profilePicture.png';

export default function Profile() {
  return (
    <>
      <Container>
        <Title>
          <img src={Profimg} alt="Usuario" />
          <h1>Meu Perfil</h1>
        </Title>
        <Formwrapper>
          <img src={Picture} alt="Usuario" />
          <Form onSubmit="a">
            <Input placeholder="Name" name="name" type="text" />
            <Input placeholder="Email" name="email" type="email" />
            <Input placeholder="Senha" name="password" type="password" />
            <Button>Cadastrar</Button>
          </Form>{' '}
        </Formwrapper>
      </Container>
    </>
  );
}
