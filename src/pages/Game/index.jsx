import { useMemo } from "react";
import Game from "./Game";
import GameContext from "./GameContext";
import useGame from "./useGame";

export default function Page() {
  const {
    unityProvider,
    goFullscreen,
    isLoaded,
    loadingProgression,
    questCompleted,
  } = useGame();

  const questCompletedMemo = useMemo(
    () => ({
      questCompleted,
    }),
    [questCompleted],
  );

  return (
    <GameContext.Provider value={questCompletedMemo}>
      <Game
        unityProvider={unityProvider}
        goFullscreen={goFullscreen}
        isLoaded={isLoaded}
        loadingProgression={loadingProgression}
      />
    </GameContext.Provider>
  );
}
