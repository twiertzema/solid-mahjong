import type { SetStoreFunction } from "solid-js/store";
import type { GameState } from "./types";
import { shuffle } from "lodash";
import { MahjongDeck } from "../constants/tiles";

export default function createInit(setStore: SetStoreFunction<GameState>) {
	return () => {
		const shuffled = shuffle(MahjongDeck);
		const wall = shuffled.slice(0, MahjongDeck.length - 14);
		const deadWall = shuffled.slice(MahjongDeck.length - 14);

		setStore({
			deadWall,
			wall,
		});
	};
}
