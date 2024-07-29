import type { Component, JSX } from "solid-js";
import { capitalize } from "lodash";
import type { MahjongTile } from "constants/tiles";
import styles from "./styles.module.css";

export interface TileProps extends JSX.HTMLAttributes<HTMLDivElement> {
  tile: MahjongTile;
}

const Tile: Component<TileProps> = ({ tile, ...props }) => {
  return (
    <div {...props} class={styles.tile}>
      <p>{capitalize(tile.genus)}</p>
      <p>{capitalize(tile.species)}</p>
    </div>
  );
};

export default Tile;
