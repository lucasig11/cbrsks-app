import InfoBox from '../../components/InfoBox'
import DiscordButton from '../../components/DiscordButton'
import Title from '../../components/Title'
import Text from '../../components/Text'
import Output from '../../components/Output'
import Action from '../../components/Action'
import S from './EnterGuild.styles'

const {VITE_LINK_DISCORD} = import.meta.env

const EnterGuild = ({urlOAuthDiscord}) => (
  <S.EnterGuild>
    <Title>
      Join Cyberskies Discord server to access game
    </Title>
    <Text className="subtitle" light>Discord membership required to access Closed Alpha</Text>

    <S.FeakForm>
      <Text><strong>1</strong> Join Discord with the password</Text>
      <Output>$skyracer</Output>
      <Action href={VITE_LINK_DISCORD} line target="_blank">
        Join Cyberskies Discord
      </Action>

      <Text><strong>2</strong> Join Discord with the password</Text>
      <DiscordButton as="a" href={urlOAuthDiscord}>Sign in with Discord</DiscordButton>
    </S.FeakForm>

    <InfoBox 
      title="During Closed Alpha, you may face some bugs." 
      info="We appreciate your feedback."
    />
  </S.EnterGuild>
)

export default EnterGuild