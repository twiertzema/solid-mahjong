import { createStore } from "solid-js/store";
import type { GameStore } from "./types";
import { DEFAULT_STATE } from "./constants";

export default function createGameStore() {
  return createStore<GameStore>(DEFAULT_STATE);
}
