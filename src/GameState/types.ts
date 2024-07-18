import type { MahjongTile } from "../constants/tiles";

export interface GameState {
	// TODO: Players' state.
	deadWall: MahjongTile[];
	wall: MahjongTile[];
}
