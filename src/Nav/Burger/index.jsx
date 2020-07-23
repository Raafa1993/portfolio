import React, {useState} from 'react';

import { StyledBurguer } from './styles';

import Nav from '../index';

export const Burguer = () => {
  const [ toggle, isToggle] = useState(false)

  return (
    <>
      <StyledBurguer toggle={toggle} onClick={() => isToggle(!toggle)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <Nav toggle={toggle} />
    </>
  )
}

export default Burguer;