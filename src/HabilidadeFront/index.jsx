import React from 'react';

import Html from '../../src/assets/html.svg';
import Css from '../../src/assets/css3.svg';
import Java from '../../src/assets/javascript.svg';
import react from '../../src/assets/react.svg';
import Bootstrap from '../../src/assets/bootstrap.svg';
import Sass from '../../src/assets/sass.svg';
import adobeXD from '../../src/assets/adobeXD.svg';
import Figma from '../../src/assets/figma-1.svg';
import Ai from '../../src/assets/adobeAI.svg';
import Photoshop from '../../src/assets/photoshop.svg';


import { Container, WrapperFront, Front, WrapperDesign, Design } from './styles';

const HabilidadeFront = () => {
  return (
    <Container>

        <WrapperFront>
          <Front>
            <img src={Html} alt="html"/>
          </Front>
          <Front>
            <img src={Css} alt="Css"/>
          </Front>
          <Front>
            <img src={Java} alt="Javascript"/>
          </Front>
          <Front>
            <img src={react} alt="React"/>
          </Front>
          <Front>
            <img src={Bootstrap} alt="Booststrap"/>
          </Front>
          <Front>
            <img src={Sass} alt="Sass"/>
          </Front>
        </WrapperFront>

        <WrapperDesign>
          <Design>
            <img src={adobeXD} alt="Adobe-XD"/>
          </Design>
          <Design>
            <img src={Figma} alt="Figma"/>
          </Design>
          <Design>
            <img src={Ai} alt="Ai"/>
          </Design>
          <Design>
            <img src={Photoshop} alt="Photoshop"/>
          </Design>
        </WrapperDesign>

    </Container>
  )
}

export default HabilidadeFront;