import type { MahjongWind } from "constants/tiles";
import { useGameStore, DEAD_WALL_WIDTH } from "GameStore";
import { produce } from "solid-js/store";

export default function useSetDeadWall() {
  const { setStore } = useGameStore();

  return (wind: MahjongWind) => {
    // Divide the wind's wall to create the dead wall.
    setStore(
      produce((store) => {
        store.wall[wind].deadTileSlots = store.wall[wind].tileSlots.splice(
          -DEAD_WALL_WIDTH,
        );
      }),
    );

    // Set the dead wind.
    setStore("deadWind", wind);
  };
}
