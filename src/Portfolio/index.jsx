import React from 'react';

import Projetos from '../Projetos';
import Separator1 from '../Separator1';

import { Container, Info,   } from './styles';

const Portfolio = () => {
  return (
    <Container>
        <Info>
          <h1>Portfolio</h1>
        </Info>

        <Projetos />

        <Separator1 />

    </Container>
  )
}

export default Portfolio;