import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  margin: 80px 0 120px;

  @media (max-width: 768px) {
    flex-direction: column;

  }

`;

export const WrapperFront = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    /* width: 100%; */
    margin-left: -15px;
    margin-right: -15px;

    @media (max-width: 460px) {
      grid-template-columns: repeat(2, 1fr);
    }


`;


export const Front = styled.div`
  width: 120px;
  height: 120px;
  background-color: #332F30;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 5px 8px 3px rgb(0 0 0 / 80%);

  opacity: 0.7;
  transition: 0.5s;
  transform: translate(0, 0);

  &:hover {
    opacity: 1;
    transform: translate(8px, -8px);
  }

  img {
    width: 68px;
    height: inherit;

    display: flex;
    align-items: center;
    margin: 0 auto;
  }

`;

export const WrapperDesign = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    /* width: 100%; */
    margin-left: -15px;
    margin-right: -15px;

    @media (max-width: 768px) {
      margin-top: 40px;
    }
`;

export const Design = styled.div`
width: 120px;
  height: 120px;
  background-color: #332F30;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 5px 8px 3px rgb(0 0 0 / 80%);


  opacity: 0.7;
  transition: 0.5s;
  transform: translate(0, 0);

  &:hover {
    opacity: 1;
    transform: translate(8px, -8px);
  }

  img {
    width: 68px;
    height: inherit;

    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;
