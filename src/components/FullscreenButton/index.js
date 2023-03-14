import styled from "styled-components";
import maximize from "../../assets/images/maximize.png";

const FullscreenButton = styled.button`
  width: 4.6rem;
  height: 4.6rem;
  text-decoration: none;
  font-size: 2rem;
  color: var(--color-white);
  cursor: pointer;
  background: url(${maximize}) no-repeat center;
  background-color: var(--color-second);
  transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;
  box-shadow: 0 0 0 var(--color-white-light);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 15px var(--color-white-light);
  }
`;

export default FullscreenButton;
