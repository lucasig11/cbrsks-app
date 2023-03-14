import styled from "styled-components";

const Info = styled.dd``;

const Title = styled.dt`
  font-weight: bold;
`;

export const InfoBox = styled.dl`
  position: relative;
  background-color: var(--color-warning);
  color: var(--color-black-first);
  font-size: 2rem;
  padding: var(--gap-medium) var(--gap-bigger) var(--gap-medium) calc(var(--gap-bigger) + 1rem);
  box-shadow: 0px 0px 99px var(--color-warning-light);

  &::before {
    --gap: 0.3rem;

    content: '';
    width: 1rem;
    height: calc(100% - var(--gap) * 2);
    position: absolute;
    left: var(--gap);
    top: var(--gap);
    background-color: var(--color-black-first);
  }
`;

export default {
  InfoBox,
  Title,
  Info,
};
