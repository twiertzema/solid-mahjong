import { type Component, Match, onMount, Switch } from "solid-js";
import { useGameStore, useInit } from "../../GameStore";
import MainMenu from "views/MainMenu";
import { GamePhase } from "GameStore/types";
import DeterminingTurnOrder from "views/DeterminingTurnOrder";
import Board from "views/Board";

const Game: Component = () => {
  const { store } = useGameStore();
  const init = useInit();

  onMount(() => init());

  return (
    <Switch>
      {/* These states have special views. */}
      <Match when={store.phase === GamePhase.Init}>
        <MainMenu />
      </Match>

      <Match when={store.phase === GamePhase.DeterminingTurnOrder}>
        <DeterminingTurnOrder />
      </Match>

      {/* Everything else uses the board. */}
      <Match
        when={
          store.phase !== GamePhase.Init &&
          store.phase !== GamePhase.DeterminingTurnOrder
        }
      >
        <Board />
      </Match>
    </Switch>
  );
};

export default Game;
