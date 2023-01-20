import { string } from "prop-types"
import DiscordButton from "../../components/DiscordButton"
import InfoBox from "../../components/InfoBox"
import Logo from "../../components/Logo"
import Text from "../../components/Text"
import S from './Login.styles'

const Login = ({urlOAuthDiscord}) => (
  <S.Login>
    <Logo />

    <S.WrapperText>
      <Text>SkyRacers: High-Speed & Low-Mercy</Text>
      <Text light>Closed Alpha</Text>
    </S.WrapperText>

    <DiscordButton as="a" href={urlOAuthDiscord}>Sign in with Discord</DiscordButton>

    <InfoBox 
      title="During Closed Alpha, you may face some bugs." 
      info="We appreciate your feedback."
    />
  </S.Login>
)

Login.propTypes = {
  urlOAuthDiscord: string.isRequired
}

export default Login