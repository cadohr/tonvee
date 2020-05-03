import React from 'react';
import Footer from '../../components/Footer'
import { Container, Content, Acknowledgment, Title, Text, BottomLeft, SubTitle, BottomRigth, Button} from './styles';
import { Form } from '@unform/web';
import { Input } from '~/components/Form';

export default () =>{
  return (
    <>
    <Container>
      <Content>
        <img src="" />
        <Acknowledgment>
          <Title>A palestra chegou ao fim</Title>
          <Text>
            Ficamos muito felizes com a sua participação. Esperamos
            que a sua experiência no evento tenha colaborado trazendo
            novas ideias e motivações para o seu negócio ir além. Seu
            certificado chegará por e-mail tendo o formulário abaixo
            prennchido.
          </Text>
        </Acknowledgment>
      </Content>
      <Content>
        <BottomLeft>
          <SubTitle>Queremos saber o que você achou</SubTitle>
            <Text>
              Para proporcionar eventos cada vez mais ricos em experiência
              e conteúdo contamos com a sua avaliação e sugestões :)
            </Text>
            </BottomLeft>
            <BottomRigth>
          <Form>
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Mensagem" name="mensagem" type="textarea" />
        <img src="" />
        <Button>Enviar formulário</Button>
          </Form>
        </BottomRigth>
      </Content>
    </Container>
    <Footer></Footer>
</>
  )


}
