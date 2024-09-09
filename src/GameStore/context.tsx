import { createContext, useContext, type ParentComponent } from "solid-js";
import type { GameStore } from "./types";
import createGameStore from "./createGameStateStore";
import { DEFAULT_STATE as DEFAULT_STORE } from "./constants";
import type { SetStoreFunction } from "solid-js/store";

function notImplemented() {
  throw new Error("not implemented");
}

export const GameStoreContext = createContext<{
  store: GameStore;
  setStore: SetStoreFunction<GameStore>;
}>({
  store: DEFAULT_STORE,
  setStore: notImplemented,
});

export const GameStoreProvider: ParentComponent = (props) => {
  const [store, setStore] = createGameStore();

  return (
    <GameStoreContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      {props.children}
    </GameStoreContext.Provider>
  );
};

export const useGameStore = () => useContext(GameStoreContext);
