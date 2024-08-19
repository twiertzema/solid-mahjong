import { expect, test } from "vitest";
import createSetTurnOrder from "./setTurnorder";
import type { GameState } from "./types";
import { createRoot } from "solid-js";
import createGameStateStore from "./createGameStateStore";
import createInit from "./init";

function run(
  testFunc: (
    setTurnOrder: ReturnType<typeof createSetTurnOrder>,
    store: GameState,
  ) => void,
) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStateStore();

    // Initialize the store.
    createInit(setStore)();

    const setTurnOrder = createSetTurnOrder(setStore);

    testFunc(setTurnOrder, store);

    dispose();
  });
}

test("east", () => {
  run((setTurnOrder, store) => {
    setTurnOrder("east");

    expect(store.players[0].wind).toEqual("east");
    expect(store.players[1].wind).toEqual("south");
    expect(store.players[2].wind).toEqual("west");
    expect(store.players[3].wind).toEqual("north");
  });
});

test("south", () => {
  run((setTurnOrder, store) => {
    setTurnOrder("south");

    expect(store.players[0].wind).toEqual("south");
    expect(store.players[1].wind).toEqual("west");
    expect(store.players[2].wind).toEqual("north");
    expect(store.players[3].wind).toEqual("east");
  });
});

test("west", () => {
  run((setTurnOrder, store) => {
    setTurnOrder("west");

    expect(store.players[0].wind).toEqual("west");
    expect(store.players[1].wind).toEqual("north");
    expect(store.players[2].wind).toEqual("east");
    expect(store.players[3].wind).toEqual("south");
  });
});

test("north", () => {
  run((setTurnOrder, store) => {
    setTurnOrder("north");

    expect(store.players[0].wind).toEqual("north");
    expect(store.players[1].wind).toEqual("east");
    expect(store.players[2].wind).toEqual("south");
    expect(store.players[3].wind).toEqual("west");
  });
});
