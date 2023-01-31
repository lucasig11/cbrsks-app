import styled from "styled-components"

const Stage = styled.div`
  position: relative;
  display: flex;
`

const Game = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 4rem;
  height: 100vh;
  gap: 1rem;
`

export default {
  Game,
  Stage
}