import {
  createGameStore,
  GamePhase,
  GameStoreContext,
  type GameStore,
} from "GameStore";
import { createRoot } from "solid-js";
import useSetPhase from "./setPhase";
import { expect, test } from "vitest";
import { renderHook } from "@solidjs/testing-library";

function run(
  testFunc: (
    setPhase: ReturnType<typeof useSetPhase>,
    store: GameStore,
  ) => void,
) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStore();

    const { result } = renderHook(useSetPhase, {
      wrapper: (props) => (
        <GameStoreContext.Provider
          value={{
            store: store,
            setStore,
          }}
        >
          {props.children}
        </GameStoreContext.Provider>
      ),
    });

    testFunc(result, store);

    dispose();
  });
}

for (const testPhase of Object.values(GamePhase)) {
  test(`sets the phase: ${testPhase}`, () => {
    run((setPhase, store) => {
      setPhase(testPhase);

      expect(store.phase).toEqual(testPhase);
    });
  });
}
