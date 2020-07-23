import React from 'react';

import { UL } from './styles';


export const Nav= ({ toggle }) => {
  return (
      <UL toggle={toggle} >
        <li>Home</li>
        <li>Sobre</li>
        <li>Habilidades</li>
        <li>Portfolio</li>
        <li>Contato</li>
      </UL>
  )
}

export default Nav;