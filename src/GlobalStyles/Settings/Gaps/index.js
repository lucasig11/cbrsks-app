import { createGlobalStyle } from "styled-components";

const Gaps = createGlobalStyle`
  :root {
    --gap-smaller: 0.8rem;
    --gap-small: 1.6rem;
    --gap-medium: 2.4rem;
    --gap-big: 3.2rem;
    --gap-bigger: 4rem; 
  }
`;

export default Gaps;
