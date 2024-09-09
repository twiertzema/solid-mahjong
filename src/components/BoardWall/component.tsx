import type { MahjongWind } from "constants/tiles";
import { For, type Component } from "solid-js";
import styles from "./styles.module.css";
import BoardWallSegment from "components/BoardWallSegment";
import type { GameStore } from "GameStore/types";

export interface BoardWallProps {
  deadWind?: MahjongWind;
  perspectiveWind: MahjongWind;
  wall: GameStore["wall"];
}

const BoardWall: Component<BoardWallProps> = (props) => {
  return (
    // TODO: Rotate pased on perspectiveWind and deadWind.
    <div class={styles.container}>
      <For each={Object.values(props.wall)}>
        {(segment, segmentIndex) => (
          // TODO: Rotate based on segmentIndex.
          <BoardWallSegment wallSegment={segment} />
        )}
      </For>
    </div>
  );
};

export default BoardWall;
