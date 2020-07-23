import React from 'react';
import logo from '../../src/assets/Logo.svg';

import ProfileInfo from '../ProfileInfo';
import Separator from '../Separator';

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
  </Container>
  )
}

export default Main;