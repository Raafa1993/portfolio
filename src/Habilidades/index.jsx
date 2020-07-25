import React from 'react';

import HabilidadeFront from '../HabilidadeFront';
import Separator1 from '../Separator1';

import { Container, Info } from './styles';

const Habilidades = () => {
  return (
    <Container>
        <Info>
          <h1>Habilidades</h1>
        </Info>

        <HabilidadeFront />
        <Separator1 />
    </Container>
  )
}

export default Habilidades;