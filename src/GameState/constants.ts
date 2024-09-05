import { type GameState, GamePhase } from "./types";

export const WALL_SEGMENT_WIDTH = 17;
export const WALL_SEGMENT_HEIGHT = 2;

export const DEFAULT_STATE: GameState = {
  currentTurn: {
    streakCounter: 0,
    wind: "east",
  },
  phase: GamePhase.Init,
  players: [],
  wall: {
    east: { tileSlots: [] },
    south: { tileSlots: [] },
    west: { tileSlots: [] },
    north: { tileSlots: [] },
  },
};
