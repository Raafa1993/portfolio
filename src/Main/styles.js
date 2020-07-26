import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 55px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  box-shadow: 0 2px 15px 2px rgba(0,0,0,.3);
  z-index: 30;
`;