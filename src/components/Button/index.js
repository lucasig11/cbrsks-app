import styled from "styled-components";
import lock from '../../assets/images/secured-lock.png'

const hasActive = ({active}) => active && css`
  background-color: var(--color-second);
  color: var(--color-white);
`

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

  &::before {
    content: url(${lock});
  }

  ${hasActive};
`

export default Button