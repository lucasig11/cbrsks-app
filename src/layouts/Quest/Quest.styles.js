import styled from "styled-components"
import Button from "../../components/Button"

const Quest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 1040px;
  gap: var(--gap-bigger);

  & > ${Button} {
    width: 405px;
    box-sizing: border-box;
  }
`

export default {
  Quest
}