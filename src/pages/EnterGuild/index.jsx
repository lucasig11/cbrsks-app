import EnterGuild from "./EnterGuild";
import useEnterGuild from "./useEnterGuild";

export default function Page() {
  const { VITE_URL_OAUTH2_DISCORD } = useEnterGuild();

  return <EnterGuild urlOAuthDiscord={VITE_URL_OAUTH2_DISCORD} />;
}
