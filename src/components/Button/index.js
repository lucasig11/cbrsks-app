import styled from "styled-components";

const hasActive = ({active}) => active && css`
  background-color: var(--color-second);
  color: var(--color-white);
`

const Button = styled.button`
  color: var(--color-black-third);
  background-color: var(--color-white);
  padding: var(--gap-small) var(--gap-medium);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.218rem;
  text-transform: uppercase;

  ${hasActive};
`

export default Button