import Tile from "components/Tile";
import type { MahjongTile, MahjongWind } from "constants/tiles";
import { chunk } from "lodash";
import { createMemo, For, type Component } from "solid-js";
import styles from "./styles.module.css";

const WALL_SEGMENT_WIDTH = 17;
const WALL_SEGMENT_HEIGHT = 2;

export interface BoardWallProps {
  deadWall: MahjongTile[];
  deadWind?: MahjongWind;
  perspectiveWind: MahjongWind;
  wall: MahjongTile[];
}

const BoardWall: Component<BoardWallProps> = (props) => {
  const segments = createMemo<MahjongTile[][][]>(() => {
    // Combine the wall and the dead wall to get all the tiles that should be
    //   stacked.
    // Reverse to start from the dead wall so the whole thing doens't shift as
    //   tiles are pulled.
    // TODO: Combining wall and dead wall directly isn't EXACTLY correct. The
    //   dead wall needs to be able to operate independently. For example, after
    //   declaring a kan, a tile is drawn from the dead wall. In that case, it
    //   needs to be treated essentially as a separate segment from the rest of
    //   the wall. Concatting them like this could result in tiles being "shared"
    //   with the live wall, which is not proper.
    const fullWall = props.wall.concat(props.deadWall).reverse();

    // Chunk all the tiles into the segments to be arranged around the middle.
    const _segments = chunk(fullWall, WALL_SEGMENT_WIDTH * WALL_SEGMENT_HEIGHT);

    // "Stack" each segment.
    return _segments.map((segment) => chunk(segment, WALL_SEGMENT_HEIGHT));
  });

  return (
    <div class={styles.container}>
      <For each={segments()}>
        {(segment, segmentIndex) => (
          <div class={styles.segment}>
            <For each={segment}>
              {(stack, stackIndex) => (
                <div class={styles.stack}>
                  <For each={stack}>
                    {(tile) => (
                      <Tile
                        class={styles["stack-tile"]}
                        concealed
                        size="small"
                        tile={tile}
                      />
                    )}
                  </For>
                </div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default BoardWall;
