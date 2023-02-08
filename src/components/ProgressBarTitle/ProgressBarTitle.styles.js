import styled, { css, keyframes } from 'styled-components'

const Title = styled.h1`
  padding-left: 0.2rem;
`

const Value = styled.p``

const Content = styled.dd`
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
`

const hasFill = ({fill}) => fill && css`
  &::before {
    transform: scaleX(${fill > 1 ? 1 : fill});
  }
`

const Bar = styled.dd`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 0.4rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-second);
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }

  ${hasFill}
`

const ProgressBarTitle = styled.dl`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--gap-smaller);
`

export default {
  ProgressBarTitle,
  Content,
  Title,
  Value,
  Bar
}