import type { SetStoreFunction } from "solid-js/store";
import { GamePhase, type GameState } from "../types";
import { MahjongWinds } from "constants/tiles";
import arrangeDeck from "utils/arrangeDeck";

export default function createInit(setStore: SetStoreFunction<GameState>) {
  return () => {
    const { deadWall, wall } = arrangeDeck();

    setStore({
      currentTurn: {
        streakCounter: 0,
        wind: "east",
      },
      deadWall,
      phase: GamePhase.Init,
      players: MahjongWinds.map(() => ({
        hand: [],
        score: 25000,
        // Wind will be set when turn order is determined.
      })),
      wall,
    });
  };
}
