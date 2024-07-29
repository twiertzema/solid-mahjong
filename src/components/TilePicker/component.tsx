import Tile from "components/Tile/component";
import type { MahjongTile } from "constants/tiles";
import { For, type JSX, type Component } from "solid-js";
import styles from "./styles.module.css";

export interface TilePickerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  onPick: (tile: MahjongTile) => void;
  tiles: MahjongTile[];
}

const TilePicker: Component<TilePickerProps> = ({
  onPick,
  tiles,
  ...props
}) => {
  return (
    <div {...props} class={styles.container}>
      <For each={tiles}>
        {(tile) => <Tile onClick={() => onPick(tile)} tile={tile} />}
      </For>
    </div>
  );
};

export default TilePicker;
