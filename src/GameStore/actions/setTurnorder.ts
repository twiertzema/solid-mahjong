import { produce } from "solid-js/store";
import type { MahjongWind } from "constants/tiles";
import getNextWind from "utils/getNextWind";
import { useGameStore } from "GameStore";

export default function useSetTurnOrder() {
  const { setStore } = useGameStore();

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

    setStore("perspectiveWind", wind);
  };
}
