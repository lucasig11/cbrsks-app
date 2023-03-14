import Login from "./Login";
import useLogin from "./useLogin";

export default function Page() {
  const { VITE_URL_OAUTH2_DISCORD } = useLogin();

  return <Login urlOAuthDiscord={VITE_URL_OAUTH2_DISCORD} />;
}
