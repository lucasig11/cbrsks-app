import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-black-first: #000;
    --color-light-black-first: rgba(0, 0, 0, 0.8);
    --color-black-second: #111; 
    --color-black-third: #272727;
    --color-light-black-third: rgba(17, 17, 17, 0.4);
    --color-black-fourth: #2b2b2b;
    --color-black-fifth: #707070;
    --color-black-sixth: #212121;

    --color-white: #fff;
    --color-white-light: rgba(255, 255, 255, 0.2);
    --color-white-second: #CFCFCF;
    
    --color-first: #5662F6;
    --color-second: #F65F10;

    --color-warning: #FF9224;
    --color-warning-light: #FF922447;
  }
`

export default Colors