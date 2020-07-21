import { createGlobalStyle } from "styled-components"
import Stonesotf from "./STONES.otf"
import Stonesttf from "./STONES.ttf"
export const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: 'Stones';
   src: local('Stones'), local('Stones'),
   url(${Stonesttf}) format('ttf'),
   url(${Stonesotf}) format('otf');
   font-weight: 300;
   font-style: normal;
}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
       margin: 0;
       padding: 0;
       border: 0;
       font-size: 100%;
       font: inherit;
       vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
       display: block;
    }
    body {
       line-height: 1;
    }
    ol, ul {
       list-style: none;
    }
    li, h1,h2,h3,h4,h5 {
      font-family:Stones;
    }
    blockquote, q {
       quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
       content: '';
       content: none;
    }
    table {
       border-collapse: collapse;
       border-spacing: 0;
    }


    * {
        box-sizing: border-box;
    }

    body {
      padding: 0;
      margin: 0;
      font-family: Montserrat, sans-serif;
      font-display: block;

    }
    a {
      text-decoration: none;
      color: inherit;
    }
    p, h1, h2, h3, h4 {
      line-height: 1.5em;
    }
    button {
      display: inline-block;
      border: none;
      padding: 0;
      margin: 0;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      font-family: inherit;
      font-size: 1em;
  }
  strong {
     font-weight: bold;
  }
  img{
     max-width:100%;
  }

  a:hover{
     color: #e41d21
  }
  h1{
     font-size: 29px;
  }
  h2{
     font-size: 25px;
  }
`
