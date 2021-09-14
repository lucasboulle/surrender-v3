import { createGlobalStyle } from 'styled-components';
import {Colors} from '../utils/Colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    font: 14px 'Fira Code', sans-serif;
    background: ${Colors.background};
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%
  }

  ul {
    list-style: none;
  }
`;
