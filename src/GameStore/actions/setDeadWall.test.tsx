import type { GameStore } from "GameStore/types";
import useSetDeadWall from "./setDeadWall";
import { renderHook } from "@solidjs/testing-library";
import { GameStoreContext } from "GameStore/context";
import createGameStore from "GameStore/createGameStateStore";
import { createRoot } from "solid-js";
import useInit from "./init";
import { MahjongWinds } from "constants/tiles";
import { expect, test } from "vitest";
import { DEAD_WALL_WIDTH, WALL_SEGMENT_WIDTH } from "GameStore/constants";
import useSetUpWall from "./setUpWall";

function run(
  testFunc: (
    setTurnOrder: ReturnType<typeof useSetDeadWall>,
    store: GameStore,
  ) => void,
) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStore();

    const {
      result: { init, setDeadWall, setUpWall },
    } = renderHook(
      () => ({
        init: useInit(),
        setDeadWall: useSetDeadWall(),
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

    // Set up the wall segments.
    setUpWall();

    testFunc(setDeadWall, store);

    dispose();
  });
}

for (const testWind of MahjongWinds) {
  test(testWind, () => {
    run((setDeadWall, store) => {
      setDeadWall(testWind);

      for (const wind of MahjongWinds) {
        if (wind === testWind) {
          expect(store.wall[wind].tileSlots).toHaveLength(
            WALL_SEGMENT_WIDTH - DEAD_WALL_WIDTH,
          );
          expect(store.wall[wind].deadTileSlots).toHaveLength(DEAD_WALL_WIDTH);
        } else {
          expect(store.wall[wind].tileSlots).toHaveLength(WALL_SEGMENT_WIDTH);
          expect(store.wall[wind].deadTileSlots).toBeUndefined();
        }
      }
    });
  });
}

test("sets the dead wind", () => {
  run((setDeadWall, store) => {
    setDeadWall("north");

    expect(store.deadWind).toEqual("north");
  });
});
