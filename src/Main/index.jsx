import React from 'react';
import logo from '../../src/assets/Logo.svg';

import ProfileInfo from '../ProfileInfo';
import Separator from '../Separator';
import Sobre from '../Sobre';
import Separator1 from '../Separator1';
import Habilidades from '../Habilidades';
import Portfolio from '../Portfolio';

import Burguer from '../Nav/Burger/index';

import { Container, Header } from './styles';

const Main = () => {
  return (
  <Container>
    <Header>
      <div>
        <img src={logo} alt="Logo"/>
      </div>
      <Burguer />
    </Header>

    <ProfileInfo />
    <Separator />

    <Sobre />
    <Separator1 />

    <Habilidades />

    <Portfolio />
    
  </Container>
  )
}

export default Main;