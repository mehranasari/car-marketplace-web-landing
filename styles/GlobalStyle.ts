import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: irs;
  font-style: normal;
  font-weight: normal;
  src: local("irs"), url(/fonts/iransans.ttf) format("truetype");
}

@font-face {
  font-family: irs-ul;
  font-style: normal;
  font-weight: normal;
  src: local("irs"), url(/fonts/iransans-ul.ttf) format("truetype");
}

@font-face {
  font-family: irs-l;
  font-style: normal;
  font-weight: normal;
  src: local("irs"), url(/fonts/iransans-l.ttf) format("truetype");
}

@font-face {
  font-family: irs-m;
  font-style: normal;
  font-weight: normal;
  src: local("irs"), url(/fonts/iransans-m.ttf) format("truetype");
}

html{
  font-size: 16px;
}

body {
  direction: rtl;
  padding: 0;
  margin: 0;
  padding-right:0px !important;
  font-family: irs;
  transition: ease all .7s;
}


a {
 color: inherit;
 text-decoration: none;
}

* {
 box-sizing: border-box;
}

/* Toast */
.toast {
  font-family: irs !important;
}

/* Mobile Styles */
@media (max-width: 1024px) {
  html {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 420px) {
  html {
    font-size: 13px;
  }
}
`;





