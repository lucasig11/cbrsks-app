import styled, {css} from "styled-components"
import Icons from "../Icons"

const hasActive = ({active}) => active && css`
  transform: translateY(120%) scale(1);
  opacity: 1;
`

const Tooltip = styled.figcaption`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  font-size: 1.2rem;
  padding: var(--gap-small);
  width: 12rem;
  background-color: var(--color-warning);
  border-radius: 0.4rem;
  text-align: center;
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
  transform: translateY(110%) scale(0);
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    top: calc(var(--gap-small) * -1);
    border: 0.8rem solid transparent;
    border-bottom-color: var(--color-warning);
  }

  ${hasActive}
` 

const WrapperIcon = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > ${Icons.Copy} {
    height: 1em;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    
    &:hover {
      transform: scale(1.4);
    }

    &:active {
      transition: transform 50ms ease-in-out;
      transform: scale(1);
    }
  }
`

export const Output = styled.output`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-white-second);
  border: 0.1rem var(--color-white) solid; 
  border-radius: 0.4rem;
  padding: 1.8rem 3.4rem;
  color: var(--color-black-first);
  font-size: 2rem;
`

export default {
  Output,
  WrapperIcon,
  Tooltip
}