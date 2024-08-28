import type { GamePhase, GameState } from "GameState/types";
import type { SetStoreFunction } from "solid-js/store";

export default function createSetPhase(setStore: SetStoreFunction<GameState>) {
  return (phase: GamePhase) => {
    setStore("phase", phase);
  };
}
