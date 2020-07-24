import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0;
`;

export const Avatar = styled.div`
  display: flex;
  margin-right: 80px;

  img {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: bold;
    position: relative;
    max-width: 460px;
    
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
      top: 15px
    }
  }

  p {
    margin-top: 20px;
    width: 372px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;

    &::before {
      width: 18px;
      height: 5px;
      left: -25px;
      top: 12px
    }
    }
    p {
      width: 280px;

      font-size: 14px;
      margin-top: 10px;
    }
  }
`;
