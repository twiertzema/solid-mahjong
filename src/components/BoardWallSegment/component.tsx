import type { WallSegment } from "GameStore/types";
import { For, Show, type Component, type JSX } from "solid-js";
import styles from "./styles.module.css";
import TileSlot from "./TileSlot";

interface BoardWallSegmentProps extends JSX.HTMLAttributes<HTMLDivElement> {
  wallSegment: WallSegment;
}

const BoardWallSegment: Component<BoardWallSegmentProps> = (props) => (
  <div class={props.class} style={props.style}>
    {/* Wall */}
    <For each={props.wallSegment.tileSlots}>
      {(stack) => (
        <div class={styles.stack}>
          <For each={stack}>{(tile) => <TileSlot tile={tile} />}</For>
        </div>
      )}
    </For>

    {/* Dead Wall */}
    <Show when={props.wallSegment.deadTileSlots}>
      {(deadTileSlots) => (
        <For each={deadTileSlots()}>
          {(stack, stackIndex) => (
            <div
              class={styles.stack}
              style={{
                "margin-left": stackIndex() === 0 ? "8px" : undefined,
              }}
            >
              <For each={stack}>{(tile) => <TileSlot tile={tile} />}</For>
            </div>
          )}
        </For>
      )}
    </Show>
  </div>
);

export default BoardWallSegment;
