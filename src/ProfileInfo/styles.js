import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 540px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 480px;
  }
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  
  h1 {
    margin-bottom: 5px;
    font-size: 36px;
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;

    font-family: Montserrat;
    font-size: 24px;
    color: #B4BEBF;
  }

  @media ( max-width: 480px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }
    
  }

  button {
    width: 145px;
    height: 45px;
    background: var(--button);
    border: 0;
    border-radius: 50px;
    
    font-size: 18px;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: #1E3B38
    }
  }

  @media ( max-width: 480px) {
    button {
      width: 112px;
      height: 32px;
      font-size: 14px;
    }
  }
`;

export const Avatar = styled.div`
  margin-right: 50px;

  width: max(65px, min(235px, 58vw));
  height: max(65px, min(235px, 58vw));

  border: 3.75px solid var(--title);
  border-radius: 50%;

  @media ( max-width: 768px) {
    margin-right: 0px;
    margin-top: 30px;
  }
`;
