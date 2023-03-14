import styled from "styled-components";
import FullscreenButton from "../../components/FullscreenButton";

const Stage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--gap-small);

  & > ${FullscreenButton} {
    align-self: flex-end;
  }
`;

const Game = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 4rem;
  height: 100vh;
  gap: 1rem;
`;

export default {
  Game,
  Stage,
};
