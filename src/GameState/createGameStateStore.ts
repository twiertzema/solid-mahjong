import { createStore } from "solid-js/store";
import type { GameState } from "./types";
import { DEFAULT_STATE } from "./constants";

export default function createGameStateStore() {
  return createStore<GameState>(DEFAULT_STATE);
}
