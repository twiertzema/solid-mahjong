import Tile from "components/Tile/component";
import type { MahjongTile } from "constants/tiles";
import { For, type JSX, type Component, createSignal } from "solid-js";
import styles from "./styles.module.css";
import { defaultProps } from "utils/solid";

export interface TilePickerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  concealed: boolean;
  onPick: (tile: MahjongTile) => void;
  tiles: MahjongTile[];
}

const TilePicker: Component<TilePickerProps> = (props) => {
  const mergedProps = defaultProps({ concealed: false }, props);

  const [selectedTile, setSelectedTile] = createSignal<MahjongTile>();

  return (
    <div class={styles.container}>
      <For each={mergedProps.tiles}>
        {(tile) => (
          <Tile
            class={styles.tile}
            concealed={mergedProps.concealed && selectedTile() !== tile}
            onClick={() => {
              setSelectedTile(tile);
              mergedProps.onPick(tile);
            }}
            tile={tile}
          />
        )}
      </For>
    </div>
  );
};

export default TilePicker;
