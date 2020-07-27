import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  button {
    width: 240px;
    height: 60px;
    background: var(--button);
    border: 0;
    border-radius: 8px;
    
    font-size: 18px;
    font-weight: bold;

    margin: 40px 0;

    transition: background-color 0.2s;

    &:hover {
      background: #1E3B38
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

export const WrapperProject = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    /* width: 100%; */
    margin-left: -15px;
    margin-right: -15px;
    margin: 0 auto;

    @media (max-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 660px) {
      grid-template-columns: repeat(1, 1fr);
    }

`;


export const Projeto = styled.div`
  width: 300px;
  height: 220px;
  background-color: #332F30;
  border: 2px solid #fff;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 5px 8px 3px rgb(0 0 0 / 80%);
  position: relative;
  
  img {
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  div {
    position: absolute;
    width: 296px;
    background-color: rgb(0 0 0);
    top: 90px;
    left: 0px;
    text-align: center;
    padding: 10px;
    border-radius: 8px;

    opacity: 0.5;
    transition: 0.5s;

    &:hover {
      opacity: 0.7;
    }

    strong {
      font-size: 24px;
      font-weight: bold;

      color: #fff;
    }

    p {
      font-family: 'Montserrat';
      font-size: 18px;
      color: #B4BEBF;
    }
  }

`;
