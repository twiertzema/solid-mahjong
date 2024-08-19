import { produce, type SetStoreFunction } from "solid-js/store";
import type { GameState } from "./types";
import type { MahjongWind } from "constants/tiles";
import getNextWind from "utils/getNextWind";

export default function createSetTurnOrder(
  setStore: SetStoreFunction<GameState>,
) {
  return (wind: MahjongWind) => {
    setStore(
      "players",
      produce((currentPlayers) => {
        // Set the first player's wind.
        currentPlayers[0].wind = wind;

        // Set the rest.
        let currentWind = wind;
        for (let i = 1; i < currentPlayers.length; i++) {
          const nextWind = getNextWind(currentWind);
          currentPlayers[i].wind = nextWind;
          currentWind = nextWind;
        }

        return currentPlayers;
      }),
    );
  };
}
