import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html {
    font-size: 62.5%; /* 16px * 62.5 = 10px = 1rem*/
}
:root{
  --primary-color:#232F3E;
  --secondary-color:#F3A847;
}
*, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
    transition: color 500ms ease-out;
  }
  ul {
    list-style: none;
  }

  body{
    background: #EAEDED;
  }
`;
