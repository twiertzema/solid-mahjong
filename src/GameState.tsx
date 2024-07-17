import { createContext, createEffect, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { MahjongDeck, type MahjongTile } from "./constants/tiles";
import { shuffle } from "lodash";

interface GameState {
	// TODO: Players' state.
	deadWall: MahjongTile[];
	wall: MahjongTile[];
}

export const GameStateContext = createContext<{
	init: () => void;
	state: GameState;
}>({
	init: () => {
		throw new Error("not implemented");
	},
	state: {
		deadWall: [],
		wall: [],
	},
});

export const GameStateProvider: ParentComponent = (props) => {
	const [store, setStore] = createStore<GameState>({
		deadWall: [],
		wall: [],
	});

	const init = () => {
		console.log("init");
		const shuffled = shuffle(MahjongDeck);
		const wall = shuffled.slice(0, MahjongDeck.length - 14);
		const deadWall = shuffled.slice(MahjongDeck.length - 14);
		console.log(wall, deadWall);

		setStore({
			deadWall,
			wall,
		});
	};

	return (
		<GameStateContext.Provider
			value={{
				init,
				state: store,
			}}
		>
			{props.children}
		</GameStateContext.Provider>
	);
};
