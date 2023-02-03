import Game from "./Game";
import useGame from "./useGame";

export default () => {
  const {unityProvider, goFullscreen, isLoaded, loadingProgression} = useGame()

  return <Game 
            unityProvider={unityProvider} 
            goFullscreen={goFullscreen} 
            isLoaded={isLoaded} 
            loadingProgression={loadingProgression}
        />
}