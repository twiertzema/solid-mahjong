import { createContext, type ParentComponent } from "solid-js";
import type { GameState } from "./types";
import { createInit, createSetPhase, createSetTurnOrder } from "./actions";
import createGameStateStore from "./createGameStateStore";
import { DEFAULT_STATE } from "./constants";

function notImplemented() {
  throw new Error("not implemented");
}

export const GameStateContext = createContext<{
  init: ReturnType<typeof createInit>;
  setPhase: ReturnType<typeof createSetPhase>;
  setTurnOrder: ReturnType<typeof createSetTurnOrder>;
  state: GameState;
}>({
  init: notImplemented,
  setPhase: notImplemented,
  setTurnOrder: notImplemented,
  state: DEFAULT_STATE,
});

export const GameStateProvider: ParentComponent = (props) => {
  const [store, setStore] = createGameStateStore();

  const init = createInit(setStore);
  const setPhase = createSetPhase(setStore);
  const setTurnOrder = createSetTurnOrder(setStore);

  return (
    <GameStateContext.Provider
      value={{
        init,
        setPhase,
        setTurnOrder,
        state: store,
      }}
    >
      {props.children}
    </GameStateContext.Provider>
  );
};
