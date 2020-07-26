import React from 'react';

import whatsapp from '../../src/assets/whatsapp.svg';
import linkedin from '../../src/assets/linkedin.svg';
import github from '../../src/assets/github.svg';

import { Container, WrapperSobre, Sobre } from './styles';

const ContatoInfo = () => {
  return (
    <Container>

        <WrapperSobre>
          <Sobre>
            <img src={whatsapp} alt="html"/>
          </Sobre>
          <Sobre>
            <img src={linkedin} alt="Css"/>
          </Sobre>
          <Sobre>
            <img src={github} alt="Javascript"/>
          </Sobre>
        </WrapperSobre>

    </Container>
  )
}

export default ContatoInfo;