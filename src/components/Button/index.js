import styled, { css } from "styled-components";
import lock from "../../assets/images/secured-lock.png";

const hasDisabled = ({ disabled }) => disabled && css`
  cursor: auto;
  
  &:hover {
    transform: scale(1);
    box-shadow: 0 0 0 var(--color-white-light);
  }
`;

const hasActive = ({ active }) => active && css`
  background-color: var(--color-second);
  color: var(--color-white);
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px var(--color-white-light);
  }

  &::before {
    content: '';
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  color: var(--color-light-black-third);
  background-color: var(--color-white);
  padding: var(--gap-small) var(--gap-medium);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.218rem;
  text-transform: uppercase;
  gap: calc(var(--gap-smaller) / 2);
  box-shadow: 0 0 0 var(--color-white-light);
  text-decoration: none;

  &::before {
    content: url(${lock});
  }

  ${hasActive};
  ${hasDisabled}
`;

export default Button;
