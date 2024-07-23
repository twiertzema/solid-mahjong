import type { MahjongTile } from "../constants/tiles";

export enum GamePhase {
  Init = "init",
  DeterminingTurnOrder = "determineTurnOrder",
  Dealing = "dealing",
  Playing = "playing",
  GameOver = "gameOver",
}

export interface GameState {
  // TODO: Players' state.
  deadWall: MahjongTile[];
  phase: GamePhase;
  wall: MahjongTile[];
}
