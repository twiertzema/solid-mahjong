import { type Component, Match, onMount, Switch, useContext } from "solid-js";
import { GameStateContext } from "./GameState";
import MainMenu from "views/MainMenu";
import { GamePhase } from "GameState/types";
import DeterminineTurnOrder from "views/DetermineTurnOrder";

const Game: Component = () => {
  const { init, state } = useContext(GameStateContext);

  onMount(() => init());

  return (
    <Switch>
      <Match when={state.phase === GamePhase.Init}>
        <MainMenu />
      </Match>

      <Match when={state.phase === GamePhase.DeterminingTurnOrder}>
        <DeterminineTurnOrder />
      </Match>

      {/* TODO: Render other phases. */}
    </Switch>
  );
};

export default Game;
