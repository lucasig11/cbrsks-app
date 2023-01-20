import styled from "styled-components"
import DiscordButton from "../../components/DiscordButton"
import { InfoBox } from "../../components/InfoBox/InfoBox.styles"
import Logo from "../../components/Logo"
import Text from "../../components/Text"

const WrapperText = styled.div``

const Login = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: var(--color-black-first);
  gap: var(--gap-bigger);
  padding-bottom: calc(var(--gap-bigger) * 2);

  & > ${Logo} {
    width: 100%;
    max-width: 585px;
    margin-top: auto;
  }

  & > ${InfoBox} {
    margin-top: auto;
  }

  @media (max-width: 340px) {
    & ${Text} {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    & > ${DiscordButton} {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 0;
    }
  }
`

export default {
  Login,
  WrapperText
}