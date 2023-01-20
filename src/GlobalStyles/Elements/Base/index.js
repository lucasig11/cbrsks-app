import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    color: var(--color-white);
  }
`

export default Base