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
           <a href="/"><img src={FlexBlog} alt="html"/>
           <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
            </a>
          </Projeto>
          <Projeto>
          <a href="/"><img src={Animais} alt="html"/>
           <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
            </a>
          </Projeto>
          <Projeto>
          <a href="/"><img src={Ecoleta} alt="html"/>
           <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
            </a>
          </Projeto>
          <Projeto>
          <a href="/"><img src={Animais} alt="html"/>
           <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
            </a>
          </Projeto>
          <Projeto>
          <a href="/"><img src={FlexBlog} alt="html"/>
           <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
            </a>
          </Projeto>
          <Projeto>
          <a href="/"><img src={Ecoleta} alt="html"/>
           <div>
              <strong>Animias Fantastico</strong>
              <p>Origamid</p>
            </div>
            </a>
          </Projeto>
        </WrapperProject>
         
        <button type="submit">Visite meu github</button>
        
    </Container>
  )
}

export default HabilidadeFront;