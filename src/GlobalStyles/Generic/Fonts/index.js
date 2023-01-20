import { createGlobalStyle } from "styled-components";
import realityHyper from '../../../assets/fonts/reality-hyper/RealityHyperRegular.ttf'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Reality Hyper', sans-serif;
    src: url(${realityHyper});
  }
`

export default Fonts