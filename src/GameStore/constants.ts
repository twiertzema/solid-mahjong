import { type GameStore, GamePhase } from "./types";

export const WALL_SEGMENT_WIDTH = 17;
export const WALL_SEGMENT_HEIGHT = 2;

export const DEAD_WALL_WIDTH = 7;

export const DEFAULT_STATE: GameStore = {
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
