import { expect, test } from "vitest";
import useInit from "./init";
import { GamePhase, type GameStore } from "../types";
import { createRoot } from "solid-js";
import createGameStore from "../createGameStateStore";
import { renderHook } from "@solidjs/testing-library";
import { GameStoreContext } from "GameStore/context";

function run(testFunc: (store: GameStore) => void) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStore();

    const { result } = renderHook(useInit, {
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

    result();

    testFunc(store);

    dispose();
  });
}

test("initializes the wall appropriately", () => {
  run((store) => {
    expect(store.wall).toEqual<GameStore["wall"]>({
      east: { deadTileSlots: undefined, tileSlots: expect.any(Array) },
      south: { deadTileSlots: undefined, tileSlots: expect.any(Array) },
      west: { deadTileSlots: undefined, tileSlots: expect.any(Array) },
      north: { deadTileSlots: undefined, tileSlots: expect.any(Array) },
    });
    expect(store.wall.east.tileSlots).toHaveLength(0);
    expect(store.wall.south.tileSlots).toHaveLength(0);
    expect(store.wall.west.tileSlots).toHaveLength(0);
    expect(store.wall.north.tileSlots).toHaveLength(0);
  });
});

test("initializes the game phase", () => {
  run((store) => {
    expect(store.phase).toEqual(GamePhase.Init);
  });
});

test("initializes the correct number of players", () => {
  run((store) => {
    expect(store.phase).toHaveLength(4);
  });
});

test("doesn't set the wind on the players yet", () => {
  run((store) => {
    for (const player of store.players) {
      expect(player.wind).toBeUndefined();
    }
  });
});
