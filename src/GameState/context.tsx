import { createContext, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { GamePhase, type GameState } from "./types";
import createInit from "./init";

export const GameStateContext = createContext<{
  init: ReturnType<typeof createInit>;
  state: GameState;
}>({
  init: () => {
    throw new Error("not implemented");
  },
  state: {
    currentTurn: {
      streakCounter: 0,
      wind: "east",
    },
    deadWall: [],
    phase: GamePhase.Init,
    players: [],
    wall: [],
  },
});

export const GameStateProvider: ParentComponent = (props) => {
  const [store, setStore] = createStore<GameState>({
    currentTurn: {
      streakCounter: 0,
      wind: "east",
    },
    deadWall: [],
    phase: GamePhase.Init,
    players: [],
    wall: [],
  });

  const init = createInit(setStore);

  return (
    <GameStateContext.Provider
      value={{
        init,
        state: store,
      }}
    >
      {props.children}
    </GameStateContext.Provider>
  );
};
