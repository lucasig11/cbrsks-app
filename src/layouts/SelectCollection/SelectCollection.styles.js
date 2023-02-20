import styled from 'styled-components'
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
`

export default {
  SelectCollection,
  FakeForm
}