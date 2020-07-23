import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 540px;

  @media (max-width: 681px) {
    flex-direction: column;
    justify-content: space-around
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
`;

export const Avatar = styled.div`
  margin-right: 50px;

  width: max(45px, min(235px, 22vw));
  height: max(45px, min(235px, 22vw));

  border: 3.75px solid var(--title);
  border-radius: 50%;
`;
