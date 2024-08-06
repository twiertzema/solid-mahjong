import type { SetStoreFunction } from "solid-js/store";
import { GamePhase, type GameState } from "./types";
import { shuffle } from "lodash";
import { MahjongDeck, MahjongWinds } from "../constants/tiles";

export default function createInit(setStore: SetStoreFunction<GameState>) {
  return () => {
    const shuffled = shuffle(MahjongDeck);
    const wall = shuffled.slice(0, MahjongDeck.length - 14);
    const deadWall = shuffled.slice(MahjongDeck.length - 14);

    setStore({
      currentTurn: {
        streakCounter: 0,
        wind: "east",
      },
      deadWall,
      phase: GamePhase.Init,
      players: MahjongWinds.map((wind) => ({
        hand: [],
        score: 25000,
        wind,
      })),
      wall,
    });
  };
}
