import { expect, test, vi } from "vitest";
import createInit from "./init";
import { GamePhase } from "./types";

function setUp() {
  const mockSetStore = vi.fn();

  const init = createInit(mockSetStore);
  init();

  return mockSetStore;
}

test("initializes the wall and dead wall appropriately", () => {
  const mockSetStore = setUp();

  expect(mockSetStore).toHaveBeenCalledWith(
    expect.objectContaining({
      deadWall: expect.any(Array),
      wall: expect.any(Array),
    }),
  );

  const { deadWall, wall } = mockSetStore.mock.calls[0][0];
  expect(wall).toHaveLength(122);
  expect(deadWall).toHaveLength(14);
});

test("initializes the game phase", () => {
  const mockSetStore = setUp();

  expect(mockSetStore).toHaveBeenCalled();

  const { phase } = mockSetStore.mock.calls[0][0];
  expect(phase).toEqual(GamePhase.Init);
});

test("initializes the correct number of players", () => {
  const mockSetStore = setUp();

  expect(mockSetStore).toHaveBeenCalled();

  const { players } = mockSetStore.mock.calls[0][0];
  expect(players).toHaveLength(4);
});
