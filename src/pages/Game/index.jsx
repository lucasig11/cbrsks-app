
import Game from "./Game";
import GameContext from "./GameContext";
import useGame from "./useGame";

export default () => {
  const {unityProvider, goFullscreen, isLoaded, loadingProgression, questCompleted} = useGame()

  return (
    <GameContext.Provider value={{questCompleted}}>
      <Game 
          unityProvider={unityProvider} 
          goFullscreen={goFullscreen} 
          isLoaded={isLoaded} 
          loadingProgression={loadingProgression}
      />
    </GameContext.Provider>
  )
}