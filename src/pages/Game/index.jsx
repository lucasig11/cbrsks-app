import Game from "./Game";
import useGame from "./useGame";

export default () => {
  const {unityProvider} = useGame()

  return <Game unityProvider={unityProvider} />
}