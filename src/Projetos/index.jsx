import React from 'react';

import FlexBlog from '../../src/assets/FlexBlog.png';
import Animais from '../../src/assets/Animais.png';
import Ecoleta from '../../src/assets/Ecoleta.png';

import { Container, WrapperProject, Projeto } from './styles';

const HabilidadeFront = () => {
  return (
    <Container>
      
        <WrapperProject>
          <Projeto>
            <img src={FlexBlog} alt="html"/>
          </Projeto>
          <Projeto>
            <img src={Animais} alt="Css"/>
          </Projeto>
          <Projeto>
            <img src={Ecoleta} alt="Javascript"/>
          </Projeto>
          <Projeto>
            <img src={Ecoleta} alt="html"/>
          </Projeto>
          <Projeto>
            <img src={Animais} alt="Css"/>
          </Projeto>
          <Projeto>
            <img src={Ecoleta} alt="Javascript"/>
          </Projeto>
        </WrapperProject>
         
        <button type="submit">Visite meu github</button>
        
    </Container>
  )
}

export default HabilidadeFront;