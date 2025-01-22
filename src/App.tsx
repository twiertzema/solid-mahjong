import type { Component } from "solid-js";

import { GameStoreProvider } from "GameStore";
import Game from "views/Game";

const App: Component = () => {
  return (
    <GameStoreProvider>
      <Game />
    </GameStoreProvider>
  );
};

export default App;
