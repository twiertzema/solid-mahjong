import { createContext, type ParentComponent } from "solid-js";
import type { GameState } from "./types";
import createInit from "./init";
import createGameStateStore from "./createGameStateStore";
import { INIT_STATE } from "./constants";

export const GameStateContext = createContext<{
  init: ReturnType<typeof createInit>;
  state: GameState;
}>({
  init: () => {
    throw new Error("not implemented");
  },
  state: INIT_STATE,
});

export const GameStateProvider: ParentComponent = (props) => {
  const [store, setStore] = createGameStateStore();

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
