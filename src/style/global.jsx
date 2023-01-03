import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }
  
  *{
    box-sizing: border-box;
  }

  input:-webkit-autofill {
   -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
  }
`;

export { GlobalStyle };
