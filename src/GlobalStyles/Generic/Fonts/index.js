import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Reality Hyper';
    src: url('/fonts/RealityHyperRegular.eot');
    src: url('/fonts/RealityHyperRegular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/RealityHyperRegular.woff2') format('woff2'),
        url('/fonts/RealityHyperRegular.woff') format('woff'),
        url('/fonts/RealityHyperRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`;

export default Fonts;
