import getTileSlots from "utils/getTileSlots";
import { type GameState, GamePhase } from "./types";

export const DEFAULT_STATE: GameState = {
  currentTurn: {
    streakCounter: 0,
    wind: "east",
  },
  phase: GamePhase.Init,
  players: [],
  wall: {
    east: { tileSlots: getTileSlots() },
    south: { tileSlots: getTileSlots() },
    west: { tileSlots: getTileSlots() },
    north: { tileSlots: getTileSlots() },
  },
};
