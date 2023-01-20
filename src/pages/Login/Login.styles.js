import styled from "styled-components"

const WrapperText = styled.div``

const Login = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black-first);
  gap: var(--gap-bigger);
`

export default {
  Login,
  WrapperText
}