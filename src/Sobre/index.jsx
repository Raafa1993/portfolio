import React from 'react';

import Illustration from '../../src/assets/Illustration.svg'

import { Container, Avatar, Info, } from './styles';

const Sobre = () => {
  return (
    <Container>
      <Avatar>
        <img src={Illustration} alt="Illustration"/>
      </Avatar>
      <Info>
        <h1>Sobre</h1>
        <div>
          <p>
             Sou um estudante na área da tecnologia e ao longo dos 2 anos que venho estudando sobre, aprendi que isso poderia impactar a vida das pessoas combinando tecnologia, educação financeira e investimentos, fazendo-me sentir que nasci para fazer o que venho estudando.
             <br />
             <br />
             Mergulho diariamente no conhecimento que venho adquirindo nos meus estudos, com foco em front-end e Design, pois quero demonstrar um pouco de mim através das telas que entrego.
             <br />
             <br />
             Gosto de trabalhar em equipe porque me dá a oportunidade de obter diferentes perspectiva do meu trabalho e aprender sobre novas coisas. Sou apaixonado por todas as tecnologias relacionadas ao AdobeXD, Figma, Photoshop, Javascript, ReactJS e NodeJS
          </p>
        </div>
      </Info>

      

    </Container>
  )
}

export default Sobre;