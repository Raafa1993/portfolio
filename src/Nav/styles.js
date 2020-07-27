import styled from 'styled-components';


export const UL = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    list-style: none;

    li {
      font-weight: bold;
      padding: 18px 10px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      display: ${({ toggle }) => toggle ? 'block' : 'none'};
      background-color: #332F30;
      position: fixed;
      transform: ${({ toggle }) =>  toggle ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 280px;
      width: 160px;
      padding: 60px 0 20px 0;
      box-shadow: 0 3px 3px 3px rgba(0,0,0,.3);
      border-radius: 5px;

      li {
        padding: 10px 10px;
      }
    }

    @media (max-width: 480px) {
      height: 200px;
      width: 100px;
      padding: 50px 0 0 0;
      font-size: 14px;
     }

     li {
       padding: 10px 10px;
     }
`;