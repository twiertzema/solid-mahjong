import { expect, test } from "vitest";
import type { GameStore } from "../types";
import { createRoot } from "solid-js";
import createGameStore from "../createGameStateStore";
import useInit from "./init";
import { GameStoreContext } from "GameStore/context";
import { renderHook } from "@solidjs/testing-library";
import useSetTurnOrder from "./setTurnorder";

function run(
  testFunc: (
    setTurnOrder: ReturnType<typeof useSetTurnOrder>,
    store: GameStore,
  ) => void,
) {
  createRoot((dispose) => {
    const [store, setStore] = createGameStore();

    const {
      result: { init, setTurnOrder },
    } = renderHook(
      () => ({
        init: useInit(),
        setTurnOrder: useSetTurnOrder(),
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

test("sets the perspective wind", () => {
  run((setTurnOrder, store) => {
    setTurnOrder("east");

    expect(store.perspectiveWind).toEqual("east");
  });
});
