import { MahjongWinds } from "constants/tiles";
import { cloneDeep } from "lodash";
import { DEFAULT_STATE } from "GameState/constants";
import type { GameState } from "GameState/types";
import type { SetStoreFunction } from "solid-js/store";

export default function useInit(setStore: SetStoreFunction<GameState>) {
  return () => {
    setStore({
      ...cloneDeep(DEFAULT_STATE),
      players: MahjongWinds.map(() => ({
        hand: [],
        score: 25000,
        // Wind will be set when turn order is determined.
      })),
    });
  };
}
