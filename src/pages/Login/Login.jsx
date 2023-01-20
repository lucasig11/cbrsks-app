import DiscordButton from "../../components/DiscordButton"
import Logo from "../../components/Logo"
import Text from "../../components/Text"
import S from './Login.styles'

const Login = () => (
  <S.Login>
    <Logo />

    <S.WrapperText>
      <Text>SkyRacers: High-Speed & Low-Mercy</Text>
      <Text light>Closed Alpha</Text>
    </S.WrapperText>

    <DiscordButton>Sign in with Discord</DiscordButton>
  </S.Login>
)

export default Login