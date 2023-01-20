import DiscordButton from "../../components/DiscordButton"
import InfoBox from "../../components/InfoBox"
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

    <InfoBox 
      title="During Closed Alpha, you may face some bugs." 
      info="We appreciate your feedback."
    />
  </S.Login>
)

export default Login