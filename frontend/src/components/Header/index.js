import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import logout from '../../assets/logout.svg';
import { Container, Logo, ShortCuts, UserProfiler, Logout } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="Tonee" />
        </Logo>
        <ShortCuts>
          <UserProfiler>
            <Link to="/profile">
              <img src={user} alt="User" />
            </Link>
          </UserProfiler>
          <Logout>
            <img src={logout} alt="Sair" />
          </Logout>
        </ShortCuts>
      </Container>
    </>
  );
}
