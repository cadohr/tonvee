import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import logout from '../../assets/logout.svg';
import { Container, Logo, ShortCuts, UserProfiler, Logout } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(signOut());
  }

  return (
    <>
      <Container>
        <Link to="/">
          <Logo>
            <img src={logo} alt="Tonvee" />
          </Logo>
        </Link>
        <ShortCuts>
          <UserProfiler>
            <Link to="/profile">
              <img
                src={
                  (profile.avatar && profile.avatar.url) ||
                  'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
                alt="User"
              />
            </Link>
          </UserProfiler>
          <Logout onClick={() => handleClick()}>
            <img src={logout} alt="Sair" />
          </Logout>
        </ShortCuts>
      </Container>
    </>
  );
}
