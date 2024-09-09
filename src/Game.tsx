import { type Component, Match, onMount, Switch, useContext } from "solid-js";
import { GameStoreContext } from "./GameStore";
import MainMenu from "views/MainMenu";
import { GamePhase } from "GameStore/types";
import DeterminingTurnOrder from "views/DeterminingTurnOrder";

const Game: Component = () => {
  const { init, store: state } = useContext(GameStoreContext);

  onMount(() => init());

  return (
    <Switch>
      <Match when={state.phase === GamePhase.Init}>
        <MainMenu />
      </Match>

      <Match when={state.phase === GamePhase.DeterminingTurnOrder}>
        <DeterminingTurnOrder />
      </Match>

      {/* TODO: Render other phases. */}
    </Switch>
  );
};

export default Game;
