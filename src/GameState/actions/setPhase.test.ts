import createGameStateStore from "GameState/createGameStateStore";
import { GamePhase, type GameState } from "GameState/types";
import { createRoot } from "solid-js";
import createSetPhase from "./setPhase";
import { expect, test } from "vitest";

function run(
  testFunc: (
    setPhase: ReturnType<typeof createSetPhase>,
    store: GameState,
  ) => void,
) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStateStore();

    const setPhase = createSetPhase(setStore);

    testFunc(setPhase, store);

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
