import React from 'react';
import {
  Container,
  Content,
  Text,
  Social,
  Contact,
  Socialtitle,
} from './styles';
import logo from '../../assets/logo.png';
import Linkedin from '../../assets/Footer/linkedin.png';
import Facebook from '../../assets/Footer/facebook.png';
import Twitter from '../../assets/Footer/twitter.png';

export default function footer() {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Tonvee" />
        </Content>
        <Content>
          <Contact>
            <Text>Fale conosco</Text>
            <a href="email:contato@tonvee.com.br">contato@tonvee.com.br</a>
            <a href="tel:002-010-66269735">002-010-66269735</a>
          </Contact>
          <Social>
            <Socialtitle>Social</Socialtitle>
            <a href="Facebook/Tonvee">
              <img src={Facebook} alt="" />
            </a>
            <a href="Linkedin/Tonvee">
              <img src={Linkedin} alt="" />
            </a>
            <a href="Twitter/Tonvee">
              <img src={Twitter} alt="" />
            </a>
          </Social>
        </Content>
      </Container>
    </>
  );
}
