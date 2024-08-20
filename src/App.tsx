import type { Component } from "solid-js";

import { GameStateProvider } from "./GameState";
import Game from "./Game";
import { ThemeContextProvider } from "theme";

const App: Component = () => {
  return (
    <ThemeContextProvider>
      <GameStateProvider>
        <Game />
      </GameStateProvider>
    </ThemeContextProvider>
  );
};

export default App;
