import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--title)

  }

  #root {
    max-width: 1024px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: Nunito, sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #231F20;
    --button: #21413E;
    --title: #D9E0E6;
    --quadrado: #332F30;
  }
`;
