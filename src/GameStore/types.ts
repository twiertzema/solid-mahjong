import type { MahjongTile, MahjongWind } from "../constants/tiles";

export enum GamePhase {
  Init = "init",
  DeterminingTurnOrder = "determiningTurnOrder",
  DeterminingDeadWall = "determiningDeadWall",
  Dealing = "dealing",
  Playing = "playing",
  GameOver = "gameOver",
}

export interface PlayerState {
  hand: MahjongTile[];
  score: number;
  wind?: MahjongWind;
}

export interface WallSegment {
  // The dead wall. If this is populated, this wall segment will be the one from
  //   which tile drawing begins.
  deadTileSlots?: (MahjongTile | undefined)[][];
  // "Slots" in which tiles may be present.
  tileSlots: (MahjongTile | undefined)[][];
}

export type GameWall = Record<MahjongWind, WallSegment>;

export interface GameStore {
  currentTurn: {
    // Streak counter in the case that East wins a hand and gets a repeat.
    streakCounter: number;
    // The current wind.
    wind: MahjongWind;
  };
  perspectiveWind?: MahjongWind;
  phase: GamePhase;
  players: PlayerState[];
  wall: GameWall;
}
