import { describe, expect, test } from "vitest";
import { MahjongDeck } from "./tiles";

describe("MahjongDeck", () => {
  test("has the correct number of total tiles", () => {
    expect(MahjongDeck).toHaveLength(136);
  });

  test("has the correct number of each tile", () => {
    // Count each kind of tile.
    const tileInstances = MahjongDeck.reduce<{ [key: string]: number }>(
      (acc, tile) => {
        const key = `${tile.genus}.${tile.species}`;
        acc[key] = (acc[key] ?? 0) + 1;
        return acc;
      },
      {},
    );

    // Verify the appropriate number of each tile instance.
    for (const [key, value] of Object.entries(tileInstances)) {
      expect(value, key).toEqual(4);
    }
  });
});
