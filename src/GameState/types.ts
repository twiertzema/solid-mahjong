import type { MahjongTile, MahjongWind } from "../constants/tiles";

export enum GamePhase {
  Init = "init",
  DeterminingTurnOrder = "determineTurnOrder",
  Dealing = "dealing",
  Playing = "playing",
  GameOver = "gameOver",
}

export interface PlayerState {
  hand: MahjongTile[];
  score: number;
  wind: MahjongWind;
}

export interface GameState {
  // TODO: Players' state.
  currentTurn: {
    // Streak counter in the case that East wins a hand and gets a repeat.
    streakCounter: number;
    // The current wind.
    wind: MahjongWind;
  };
  deadWall: MahjongTile[];
  phase: GamePhase;
  players: PlayerState[];
  wall: MahjongTile[];
}
