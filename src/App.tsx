import type { Component } from "solid-js";

import { GameStoreProvider } from "./GameStore";
import Game from "./Game";
import { ThemeContextProvider } from "theme";

const App: Component = () => {
  return (
    <ThemeContextProvider>
      <GameStoreProvider>
        <Game />
      </GameStoreProvider>
    </ThemeContextProvider>
  );
};

export default App;
