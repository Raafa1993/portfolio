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
           <a href="/"><img src={FlexBlog} alt="html"/></a>
           <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
          </Projeto>
          <Projeto>
            <img src={Animais} alt="Css"/>
            <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
          </Projeto>
          <Projeto>
            <img src={Ecoleta} alt="Javascript"/>
            <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
          </Projeto>
          <Projeto>
            <img src={Ecoleta} alt="html"/>
            <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
          </Projeto>
          <Projeto>
            <img src={Animais} alt="Css"/>
            <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
          </Projeto>
          <Projeto>
            <img src={Ecoleta} alt="Javascript"/>
            <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
          </Projeto>
        </WrapperProject>
         
        <button type="submit">Visite meu github</button>
        
    </Container>
  )
}

export default HabilidadeFront;