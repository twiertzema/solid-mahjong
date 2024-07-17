import type { Component } from "solid-js";

import { GameStateProvider } from "./GameState";
import Game from "./Game";

const App: Component = () => {
	return (
		<GameStateProvider>
			<Game />
		</GameStateProvider>
	);
};

export default App;
