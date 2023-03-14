import styled, { css } from "styled-components";
import Button from "../../components/Button";

const hasActive = ({ active }) => active && css`
  transform: translateY(0);
  opacity: 1;
`;

const Quest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 1040px;
  gap: var(--gap-bigger);
  transform: translateY(120%);
  opacity: 0;
  transition: all 400ms cubic-bezier(.42,0,.88,1.78);

  ${hasActive};

  & > ${Button} {
    width: 405px;
    box-sizing: border-box;
  }
`;

export default {
  Quest,
};
