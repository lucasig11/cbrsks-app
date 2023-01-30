import Game from "./Game";
import useGame from "./useGame";

export default () => {
  const {unityProvider, goFullscreen} = useGame()

  return <Game unityProvider={unityProvider} goFullscreen={goFullscreen} />
}