import { createContext, ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { MahjongTile } from "./constants/tiles";

interface GameState {
  // TODO: Players' state.
  deadWall: MahjongTile[][];
  wall: MahjongTile[][];
}

export const GameStateContext = createContext<GameState>();

export const GameStateProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<GameState>({
    deadWall: [],
    wall: [],
  });

  return (
    <GameStateContext.Provider value={store}>
      {props.children}
    </GameStateContext.Provider>
  );
};
