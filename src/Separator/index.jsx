import React from 'react';

import { Container, GithubIcon, LinkedinIcon } from './styles';

const Separator = () => {
  return (
    <Container>
        <div>
          <a href="https://github.com/Raafa1993">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/rafaelasilva1993/">
            <LinkedinIcon />
          </a>
        </div>
    </Container>
  )
}

export default Separator;