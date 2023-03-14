import DiscordButton from "../../components/DiscordButton";
import S from "./Admin.styles";

const { VITE_URL_OAUTH2_DISCORD_ADMIN } = import.meta.env;

function Admin() {
  return (
    <S.Admin>
      <DiscordButton as="a" href={VITE_URL_OAUTH2_DISCORD_ADMIN}>
        Sign in with Discord
      </DiscordButton>
    </S.Admin>
  );
}

export default Admin;
