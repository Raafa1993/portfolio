import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 3px;
  border: 0;

  >div {
    display: flex;
    align-items: center;
  }

  &::before{
    content: '';
    width: 880px;
    height: 2px;
    background-color: #fff;
    margin-right: 20px;
  }
`;

export const GithubIcon = styled(Github)`
  width: 45px;
  height: 45px;
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  width: 41px;
  height: 41px;
  margin-left: 10px
`;

