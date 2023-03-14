import styled, { css } from "styled-components";

const hasOrange = ({ orange }) =>
  orange &&
  css`
    color: var(--color-second);
  `;

const hasBigger = ({ bigger }) =>
  bigger &&
  css`
    font-size: 9rem;
  `;

const Title = styled.h1`
  font-size: 3.5rem;
  color: var(--color-white);
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;

  ${hasOrange};
  ${hasBigger};
`;

export default Title;
