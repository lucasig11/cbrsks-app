import styled, { css } from "styled-components";

const hasLight = ({light}) => light && css`
  color: var(--color-black-fifth);
`

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: var(--gap-smaller);

  ${hasLight};

  & > strong {
    font-size: 3.5rem;
    font-weight: bold;
  }
`

export default Text