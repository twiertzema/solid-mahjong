import type { Component } from "solid-js";
import { capitalize } from "lodash";
import type { MahjongTile } from "constants/tiles";
import "./styles.css";

export interface TileProps {
  tile: MahjongTile;
}

const Tile: Component<TileProps> = ({ tile }) => {
  return (
    <div class="tile">
      <p>{capitalize(tile.genus)}</p>
      <p>{capitalize(tile.species)}</p>
    </div>
  );
};

export default Tile;
