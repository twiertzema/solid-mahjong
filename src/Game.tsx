import { type Component, Match, onMount, Switch, useContext } from "solid-js";
import { GameStateContext } from "./GameState";
import MainMenu from "components/MainMenu";
import { GamePhase } from "GameState/types";

const Game: Component = () => {
  const { init, state } = useContext(GameStateContext);

  onMount(() => init());

  return (
    <Switch>
      <Match when={state.phase === GamePhase.Init}>
        <MainMenu />
      </Match>

      {/* TODO: Render other phases. */}
    </Switch>
  );
};

export default Game;
