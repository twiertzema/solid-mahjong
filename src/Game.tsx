import { type Component, For, onMount, useContext } from "solid-js";
import { GameStateContext } from "./GameState";

const Game: Component = () => {
	const { init, state } = useContext(GameStateContext);

	onMount(() => init());

	return (
		<div>
			<h3>Wall</h3>
			<ul>
				<For each={state.wall}>{(tile) => <li>{tile.toString()}</li>}</For>
			</ul>

			<h3>Dead Wall</h3>
			<ul>
				<For each={state.deadWall}>{(tile) => <li>{tile.toString()}</li>}</For>
			</ul>
		</div>
	);
};

export default Game;
