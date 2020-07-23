import React from 'react';


import { Container, ProfileData, Avatar, } from './styles';

const ProfileInfo = () => {
  return (
    <Container>
      <ProfileData>
        <h1>Rafael Araujo da Silva</h1>
        <p>Desenvolvedor Front-end</p>
        <button type="submit">Contrate-me</button>
      </ProfileData>

      <Avatar />

    </Container>
  );
}

export default ProfileInfo;