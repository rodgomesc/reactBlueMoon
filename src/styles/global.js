import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
const GlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 body {
     background: #e9f0f7;

     text-rendering: optimizeLegibility !important;
     -webkit-font-smoothing: antialiased !important;
     font-family: sans-serif;
 }
 body, html, #root {
     height:100%;
 }

 `;

export default GlobalStyle;
