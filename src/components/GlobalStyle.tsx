import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 25px;
  }
  html {
    font-family: 'Roboto', 'sans-serif';
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
