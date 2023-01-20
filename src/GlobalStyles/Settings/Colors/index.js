import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-black-first: #000;
    --color-black-second: #111; 
    --color-black-third: #707070;

    --color-white: #fff;
    --color-white-light: rgba(255, 255, 255, 0.2);
    
    --color-first: #5662F6;

    --color-warning: #FF9224;
    --color-warning-light: #FF922447;
  }
`

export default Colors