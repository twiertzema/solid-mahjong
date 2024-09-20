import { renderHook } from "@solidjs/testing-library";
import { GameStoreContext } from "GameStore/context";
import createGameStore from "GameStore/createGameStateStore";
import type { GameStore } from "GameStore/types";
import { createRoot } from "solid-js";
import useInit from "./init";
import useSetUpWall from "./setUpWall";
import { expect, test } from "vitest";
import { MahjongWinds } from "constants/tiles";
import { WALL_SEGMENT_WIDTH } from "GameStore/constants";

function run(testFunc: (store: GameStore) => void) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStore();

    const {
      result: { init, setUpWall },
    } = renderHook(
      () => ({
        init: useInit(),
        setUpWall: useSetUpWall(),
      }),
      {
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
      },
    );

    // Initialize the store.
    init();

    setUpWall();

    testFunc(store);

    dispose();
  });
}

test("sets all winds' tile slots", () => {
  run((store) => {
    for (const wind of MahjongWinds) {
      expect(store.wall[wind].tileSlots).toHaveLength(WALL_SEGMENT_WIDTH);
    }
  });
});
