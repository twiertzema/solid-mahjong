import { type GameState, GamePhase } from "./types";

export const DEFAULT_STATE: GameState = {
  currentTurn: {
    streakCounter: 0,
    wind: "east",
  },
  deadWall: [],
  phase: GamePhase.Init,
  players: [],
  wall: [],
};
