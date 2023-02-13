import styled, { css } from "styled-components"

const hasLine = ({line}) => line && css`
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.1rem;
    background-color: var(--color-black-fifth);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const Action = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-second);
  font-size: 1.7rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 0px 0px 28px var(--color-second);

  ${hasLine};
`

export default Action