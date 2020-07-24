import styled from 'styled-components';

import { Square } from '@styled-icons/boxicons-solid/Square';
import { Triangle } from '@styled-icons/ionicons-solid/Triangle';
import { Circle } from '@styled-icons/fa-solid/Circle';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border: 0;

  >div {
    display: flex;
    align-items: center;
  }

  &::before{
    content: '';
    width: 880px;
    height: 2px;
    background-color: #fff;
    margin-right: 20px;
  }
`;

export const QuadradoIcon = styled(Square)`
   width: 42px;
   height: 42px;

   path {
    color: #A68E66;
   }
`;

export const TrianguloIcon = styled(Triangle)`
  width: 42px;
  height: 42px;

  path {
    color: #649d99;
   }
`;

export const CirculoIcon = styled(Circle)`
  width: 42px;
  height: 42px;

  path {
    color: #801C20;
   }
`;
