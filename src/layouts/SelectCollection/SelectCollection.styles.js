import styled, {css} from 'styled-components'
import Button from '../../components/Button'

const FakeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-smaller);
  
  & > ${Button} {
    width: 300px;
  }
`

const hasActive = ({active}) => active && css`
  transform: scale(1);
  opacity: 1;
`

const SelectCollection = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-light-black-first);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-bigger);
  transform: scale(0);
  opacity: 0;
  transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;

  ${hasActive};
`

export default {
  SelectCollection,
  FakeForm
}