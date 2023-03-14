import { useContext } from "react";
import GameContext from "./GameContex";

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};

export default useGameContext;
