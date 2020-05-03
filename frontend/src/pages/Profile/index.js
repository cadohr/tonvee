import React from 'react';
import { Form } from '@unform/web';
import { Container, Title, Button, Formwrapper, Imagewrapper } from './styles';
import { Input } from '~/components/Form';
import Footer from '~/components/Footer';
import Profimg from '../../assets/pageProfile/meu_perfil.svg';
import Editpicture from '../../assets/pageProfile/editPicture.svg';
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
          <Imagewrapper>
            <div>

            <a href="a">
              <img
                className="edit-picture"
                src={Editpicture}
                alt="Editar foto de perfil"
                />
            </a>
                </div>
            <img className="profile-picture" src={Picture} alt="Usuario" />
          </Imagewrapper>
          <Form onSubmit="a">
            <Input placeholder="Name" name="name" type="text" />
            <Input placeholder="Email" name="email" type="email" />
            <Input placeholder="Senha" name="password" type="password" />
            <Button>Cadastrar</Button>
          </Form>
        </Formwrapper>
      </Container>
      <Footer></Footer>
    </>
  );
}
