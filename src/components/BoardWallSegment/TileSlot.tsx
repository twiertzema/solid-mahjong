import Tile from "components/Tile";
import type { MahjongTile } from "constants/tiles";
import { type Component, Show } from "solid-js";
import { useTheme } from "theme";
import styles from "./styles.module.css";

interface TileSlotProps {
  tile?: MahjongTile;
}

const TileSlot: Component<TileSlotProps> = (props) => {
  const theme = useTheme();

  return (
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
      when={props.tile}
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
  );
};

export default TileSlot;
