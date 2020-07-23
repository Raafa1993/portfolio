import styled from 'styled-components';

export const StyledBurguer = styled.div`
     width: 2rem;
     height: 2rem;
     position: fixed;
     top: 15px;
     right: 20px;
     display: flex;
     justify-content: space-around;
     flex-flow: column nowrap;
     z-index: 20;
     display: none;
     
     @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
     }


     div {
       width: 2rem;
       height: 0.25rem;
       background-color: ${({ toggle }) => toggle ? '#a11c21' : 'var(--title)'};
       border-radius: 10px;
       transform-origin: 1px;
       transition: all 0.3s linear;

       &:nth-child(1) {
         transform: ${({ toggle }) => toggle ? 'rotate(45deg)' : 'rotate(0)'};
       }

       &:nth-child(2) {
         transform: ${({ toggle }) => toggle ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${({ toggle }) => toggle ? 0 : 1};
       }

       &:nth-child(3) {
         transform: ${({ toggle }) => toggle ? 'rotate(-45deg)' : 'rotate(0)'};
       }
     }
`;