import Tile from "components/Tile/component";
import type { MahjongTile } from "constants/tiles";
import { For, type JSX, type Component, createSignal } from "solid-js";
import styles from "./styles.module.css";

export interface TilePickerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  concealed?: boolean;
  disabled?: boolean;
  onPick: (tile: MahjongTile) => void;
  tiles: MahjongTile[];
}

const TilePicker: Component<TilePickerProps> = (props) => {
  const [selectedTile, setSelectedTile] = createSignal<MahjongTile>();

  return (
    <div class={styles.container}>
      <For each={props.tiles}>
        {(tile) => (
          <Tile
            classList={{
              [styles["tile--selectable"]]: !props.disabled,
            }}
            concealed={props.concealed && selectedTile() !== tile}
            onClick={() => {
              if (props.disabled) return;

              setSelectedTile(tile);
              props.onPick(tile);
            }}
            tile={tile}
          />
        )}
      </For>
    </div>
  );
};

export default TilePicker;
