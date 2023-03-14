import styled, { css } from "styled-components";
import Button from "../../../components/Button";

const Close = styled.p`
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--color-white);
  opacity: 0.65;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: var(--color-white);
  width: 560px;
  text-align: center;
  line-height: 3rem;
  margin-bottom: var(--gap-bigger);
  
  & > strong {
    background-color: var(--color-white);
    color: var(--color-black-first);
  }

  & > strong.orange {
    background-color: var(--color-second);
    color: var(--color-white);
  }
`;

const hasActive = ({ active }) => active && css`
  transform: scale(1);
`;

const Title = styled.h1`
  font-family: 'Rajdhani', sans-serif;
  font-size: 9rem;
  color: var(--color-second);
  text-transform: uppercase;
  width: 1400px;
  text-align: center;
  font-weight: bold;
  margin-bottom: var(--gap-bigger);
`;

const Modal = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-light-black-first);
  transform-origin: center;
  transform: scale(0);
  transition: transform 300ms ease-in-out;

  & > ${Button} {
    margin-bottom: var(--gap-big);
    padding-left: var(--gap-bigger);
    padding-right: var(--gap-bigger);
  }

  ${hasActive}
`;

export default {
  Modal,
  Title,
  Text,
  Close,
};
