import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Input } from '~/components/Form';
import Footer from '~/components/Footer';

import AvatarInput from './AvatarInput';

import Profimg from '~/assets/pageProfile/meu_perfil.svg';
// import Editpicture from '~/assets/pageProfile/editPicture.svg';
// import Picture from '~/assets/pageProfile/profilePicture.png';

import { Container, Title, Button, Formwrapper, Imagewrapper, InputWrapper } from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.log(data);
    dispatch(updateProfileRequest(data));
  }

  return (
    <>
      <Container>
        <Title>
          <img src={Profimg} alt="Usuario" />
          <h1>Meu Perfil</h1>
        </Title>
        <Formwrapper>
          <Form initialData={profile} onSubmit={handleSubmit}>
            <Imagewrapper>
              {/* <div>
              <a href="a">
                <img
                  className="edit-picture"
                  src={Editpicture}
                  alt="Editar foto de perfil"
                />
              </a>
            </div> */}
            {/* <img className="profile-picture" src={Picture} alt="Usuario" /> */}
                <AvatarInput name="avatar_id" />
            </Imagewrapper>
            <InputWrapper>
            <Input placeholder="Name" name="name" type="text" />
            <Input placeholder="Email" name="email" type="email" />

            {/* <hr />

            <Input
              placeholder="Senha atual"
              name="oldPassword"
              type="password"
              value={oldPassword}
              onChange={(e) => handleOldPassworChange(e)}
            />

            <Input
              placeholder="Nova senha"
              name="password"
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <Input
              placeholder="Confirmação de senha"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e)}
            /> */}

            <Button>Salvar</Button>
            </InputWrapper>

          </Form>
        </Formwrapper>
      </Container>
      <Footer></Footer>
    </>
  );
}
