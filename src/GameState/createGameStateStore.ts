import { createStore } from "solid-js/store";
import type { GameState } from "./types";
import { INIT_STATE } from "./constants";

export default function createGameStateStore() {
  return createStore<GameState>(INIT_STATE);
}
