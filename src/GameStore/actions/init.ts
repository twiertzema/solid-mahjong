import { MahjongWinds } from "constants/tiles";
import { cloneDeep } from "lodash";
import { useGameStore, DEFAULT_STATE } from "GameStore";

export default function useInit() {
  const { setStore } = useGameStore();

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
