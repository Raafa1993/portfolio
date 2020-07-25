import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 480px;

  @media (max-width: 768px) {
    flex-direction: column;

    height: 644px;
  }

`;

export const WrapperFront = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    /* width: 100%; */
    margin-left: -15px;
    margin-right: -15px;
    margin: 0 auto;
`;


export const Front = styled.div`
  width: 120px;
  height: 120px;
  background-color: #332F30;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 5px 8px 3px rgb(0 0 0 / 80%);

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
    margin: 0 auto;
`;

export const Design = styled.div`
width: 120px;
  height: 120px;
  background-color: #332F30;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 5px 8px 3px rgb(0 0 0 / 80%);


  img {
    width: 68px;
    height: inherit;

    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;
