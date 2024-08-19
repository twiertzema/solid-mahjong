import { expect, test } from "vitest";
import createInit from "./init";
import { GamePhase, type GameState } from "./types";
import { createRoot } from "solid-js";
import createGameStateStore from "./createGameStateStore";

function run(testFunc: (store: GameState) => void) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStateStore();

    const init = createInit(setStore);
    init();

    testFunc(store);

    dispose();
  });
}

test("initializes the wall and dead wall appropriately", () => {
  run((store) => {
    expect(store.wall).toHaveLength(122);
    expect(store.deadWall).toHaveLength(14);
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
