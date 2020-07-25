import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: bold;
    position: relative;
    padding: 40px 0;
    margin-left: 40px;
    
    &::before {
      content: '';
      width: 24px;
      height: 10px;
      background: #7DCCC6;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: -34px;
      top: 55px
    }
  }
`;
