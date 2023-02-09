import InfoBox from '../../components/InfoBox'
import DiscordButton from '../../components/DiscordButton'
import S from './EnterGuild.styles'

const EnterGuild = ({urlOAuthDiscord}) => (
  <S.EnterGuild>

  <DiscordButton as="a" href={urlOAuthDiscord}>Sign in with Discord</DiscordButton>
    <InfoBox 
      title="During Closed Alpha, you may face some bugs." 
      info="We appreciate your feedback."
    />
  </S.EnterGuild>
)

export default EnterGuild