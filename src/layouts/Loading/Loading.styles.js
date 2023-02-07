import styled, { css } from "styled-components";

const Bar = styled.div`
  position: relative;
  background-color: var(--color-black-fourth);
  width: 100%;
  height: 1rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    will-change: transform;
    transform-origin: left center;
    transform: scaleX(${({loadingProgression}) => loadingProgression});
  }
`

const Text = styled.h1`
  font-family: 'Reality Hyper', sans-serif;
  font-size: 3rem;
  padding-left: var(--gap-medium);
`

const hasIsLoaded = ({isLoaded}) => isLoaded && css`
  display: none;
`

const Loading = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--gap-bigger);
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-black-first);
  width: 1040px;
  height: 586px;
  
  ${hasIsLoaded};
`

export default {
  Loading,
  Text,
  Bar
}