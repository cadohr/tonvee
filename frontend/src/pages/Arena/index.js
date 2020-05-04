import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import api from '~/services/api';

import Footer from '~/components/Footer';
import Logo from '~/assets/inovacao_light.svg';
import Calendario from '~/assets/pageArena/calendario.svg';
import Live from '~/assets/pageArena/real_time.svg';
import Epoca from '~/assets/pageArena/epoca.png';
import Pegn from '~/assets/pageArena/pegn.png';
import Comentario from '~/assets/pageArena/comentario.png';
import palestrante1 from '~/assets/pageArena/palestrante1.png';
import palestrante2 from '~/assets/pageArena/palestrante2.png';
import palestrante3 from '~/assets/pageArena/palestrante3.png';
import palestrante4 from '~/assets/pageArena/palestrante4.png';
import Leftarrow from '~/assets/pageArena/left-arrow.png';
import Rightarrow from '~/assets/pageArena/right-arrow.png';

import {
  Container,
  Presentation,
  Guests,
  Title,
  Information,
  Suporters,
  Comments,
} from './styles';

export default function Arena() {
  const { slug } = useParams();
  const [arena, setArena] = useState({});

  useEffect(() => {
    async function loadArena() {
      const { data } = await api.get(`/arenas/${slug}`);

      data.description =
        'Este espaço destina-se a promover mais inovação por meio da colaboração e da cooperação entre empresas e indústrias, instituições de pesquisa e desenvolvimento e o setor público. Tem como público-alvo as comunidades empresariais regionais que possuem negóco';
      if (data.slug === 'arena-tech') {
      }

      if (data.slug === 'arena-inovacao') {
      }

      if (data.slug === 'arena-varejo') {
      }

      if (data.slug === 'arena-financas') {
      }

      setArena(data);
    }

    loadArena();
  }, [slug]);

  return (
    <div>
      <Container>
        <Presentation>
          <img src={Logo} alt="Sair" />
          <h1>{arena.name}</h1>
          <span className="arena-description">{arena.description}</span>
        </Presentation>
      </Container>

      <Guests>
        <Container>
          <Title>Convidados</Title>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={4}
            visibleSlides={4}
            infinite
          >
            <Slider>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <Image src={palestrante1} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">Carlos Abreu</span>
                    <span className="speaker-description">
                      Palestrante renomado nas áreas de finanças e novos
                      negócios com mais de 12 anos de experiência.
                    </span>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <Image src={palestrante2} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">João Dias Andrade</span>
                    <span className="speaker-description">
                      CEO e co-founder da empresa Inovation Tecnology,
                      trabalhando 10 anos no ramo.
                    </span>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <Image src={palestrante3} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">Mariana Amorim</span>
                    <span className="speaker-description">
                      Jornalista da revista Novo Mundo, especializada no tema
                      inovação e palestrante a mais de 5 anos.
                    </span>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <Image src={palestrante4} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">Denise Costa</span>
                    <span className="speaker-description">
                      Desenvolvedora a 15 anos, trabalhou por 10 no vale do
                      silício e fundou a empresa Stonks.
                    </span>
                  </div>
                </div>
              </Slide>
              <ButtonBack>
                <Image src={Leftarrow} />
              </ButtonBack>
              <ButtonNext>
                <Image src={Rightarrow} />
              </ButtonNext>
            </Slider>
          </CarouselProvider>
        </Container>
      </Guests>
      <Information>
        <Container className="inner">
          <div className="lecture-info-wrapper">
            <div className="title-info">
              <img src={Calendario} alt="Sair" />
              confira os horários e <br /> baixe seu material
            </div>
            <div className="title-info-content">
              <span className="lecture">
                <strong>Palestra:</strong> 8h00 - Estratégias de transformação
                digital
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> 9h00 - Startups
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> 10h30 - Criando canvas
              </span>
            </div>
          </div>
          <div className="lecture-info-wrapper">
            <div className="title-info">
              <img src={Live} alt="Sair" />
              Acompanhe <br /> Ao vivo:
            </div>
            <div className="title-info-content">
              <span className="lecture">
                <strong>Palestra:</strong> 8h00 - Estratégias de transformação
                digital
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> 9h00 - Startups
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> 10h30 - Criando canvas
              </span>
            </div>
          </div>
        </Container>
      </Information>
      <Container>
        <Suporters>
          <Title className="sponsers">Iniciativa de:</Title>
          <div>
            <img src={Pegn} alt="Sair" />
            <img src={Epoca} alt="Sair" />
          </div>
        </Suporters>
        <Comments>
          <Title>O que as pessoas estão falando</Title>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={2}
            visibleSlides={1}
            infinite="true"
          >
            <Slider>
              <Slide index={0}>
                <div className="comments-wrapper">
                  <div>
                    <Image src={Comentario} />
                    <span className="comments-title">Emily Costa</span>
                    <span>Micro-empreendedora</span>
                  </div>
                  <span>
                    Adorei a experiência que eu tive na última palestra, o
                    evento em si me proporcionou uma imersão em cada assunto e
                    me deram várias ideias aplicar no meu negócio. Pretendo
                    voltar em 2022. Recomendo!!!
                  </span>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="comments-wrapper">
                  <div>
                    <Image src={Comentario} />
                    <span className="comments-title">Emily Costa</span>
                    <span>Micro-empreendedora</span>
                  </div>
                  <span>
                    Adorei a experiência que eu tive na última palestra, o
                    evento em si me proporcionou uma imersão em cada assunto e
                    me deram várias ideias aplicar no meu negócio. Pretendo
                    voltar em 2022. Recomendo!!!
                  </span>
                </div>
              </Slide>
              <ButtonBack>
                <Image src={Leftarrow} />
              </ButtonBack>
              <ButtonNext>
                <Image src={Rightarrow} />
              </ButtonNext>
            </Slider>
          </CarouselProvider>
        </Comments>
      </Container>
      <Footer />
    </div>
  );
}
