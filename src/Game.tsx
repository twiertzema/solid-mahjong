import { type Component, Match, onMount, Switch } from "solid-js";
import { useGameStore, useInit } from "./GameStore";
import MainMenu from "views/MainMenu";
import { GamePhase } from "GameStore/types";
import DeterminingTurnOrder from "views/DeterminingTurnOrder";

const Game: Component = () => {
  const { store } = useGameStore();
  const init = useInit();

  onMount(() => init());

  return (
    <Switch>
      <Match when={store.phase === GamePhase.Init}>
        <MainMenu />
      </Match>

      <Match when={store.phase === GamePhase.DeterminingTurnOrder}>
        <DeterminingTurnOrder />
      </Match>

      {/* TODO: Render other phases. */}
    </Switch>
  );
};

export default Game;
