import Tile from "components/Tile";
import type { WallSegment } from "GameStore/types";
import { For, Show, type Component, type JSX } from "solid-js";
import styles from "./styles.module.css";
import { useTheme } from "theme";

interface BoardWallSegmentProps extends JSX.HTMLAttributes<HTMLDivElement> {
  wallSegment: WallSegment;
}

const BoardWallSegment: Component<BoardWallSegmentProps> = (props) => {
  const theme = useTheme();

  return (
    <div class={props.class}>
      <For each={props.wallSegment.tileSlots}>
        {(stack, stackIndex) => (
          <div class={styles.stack}>
            <For each={stack}>
              {(tile) => (
                <Show
                  fallback={
                    // Occupy the space in the screen for the tile "slot".
                    <div
                      style={{
                        ...theme.components.tile.small,
                        visibility: "hidden",
                      }}
                    />
                  }
                  when={tile}
                >
                  {(_tile) => (
                    <Tile
                      class={styles["stack-tile"]}
                      concealed
                      size="small"
                      tile={_tile()}
                    />
                  )}
                </Show>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default BoardWallSegment;
