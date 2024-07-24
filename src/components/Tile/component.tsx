import type { Component } from "solid-js";
import type { MahjongTile } from "constants/tiles";
import "./styles.css";
import { capitalize } from "lodash";

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
