import React, { useState, useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel';
import Logo from '../../assets/inovacao_light.svg';
import Calendario from '../../assets/pageArena/calendario.svg';
import Live from '../../assets/pageArena/real_time.svg';
import Epoca from '../../assets/pageArena/epoca.png';
import Pegn from '../../assets/pageArena/pegn.png';
import Comentario from '../../assets/pageArena/comentario.png';
import Speaker from '../../assets/pageArena/speaker.png';
import Leftarrow from '../../assets/pageArena/left-arrow.png';
import Rightarrow from '../../assets/pageArena/right-arrow.png';

import {
  Container,
  Presentation,
  Guests,
  Title,
  Information,
  Suporters,
  Comments,
} from './styles';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Arena() {
  return (
    <div>
      <Container>
        <Presentation>
          <img src={Logo} alt="Sair" />
          <h1>Arena Inovação</h1>
          <span className="arena-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultrices tristique justo, et eleifend purus viverra et. Nulla
            condimentum consectetur gravida. Mauris sollicitudin blandit tellus.
            Curabitur rutrum blandit massa at iaculis. Aliquam erat volutCu
            rabitur rutrum blandit massa at iaculis. Aliquam erat volut
          </span>
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
                  <Image src={Speaker} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">Caito Maia</span>
                    <span className="speaker-description">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
                    </span>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <Image src={Speaker} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">Caito Maia</span>
                    <span className="speaker-description">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
                    </span>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <Image src={Speaker} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">Caito Maia</span>
                    <span className="speaker-description">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
                    </span>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="slide-wrapper">
                  <Image src={Speaker} />
                  <div className="speaker-wrapper">
                    <span className="speaker-name">Caito Maia</span>
                    <span className="speaker-description">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
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
                <strong>Palestra:</strong> Caito Maia -18h / Cristina
                Junqueira-19h30
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> Caito Maia -18h / Cristina
                Junqueira-19h30
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> Caito Maia -18h / Cristina
                Junqueira-19h30
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
                <strong>Palestra:</strong> Caito Maia - Lorem ipsum dolor sit
                amet
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> Caito Maia - Lorem ipsum dolor sit
                amet
              </span>
              <span className="lecture">
                <strong>Palestra:</strong> Caito Maia - Lorem ipsum dolor sit
                amet
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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum
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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum
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
    </div>
  );
}
