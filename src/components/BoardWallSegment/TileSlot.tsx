import Tile from "components/Tile";
import type { MahjongTile } from "constants/tiles";
import { type Component, Show } from "solid-js";

interface TileSlotProps {
  tile?: MahjongTile;
}

const TileSlot: Component<TileSlotProps> = (props) => {
  return (
    <Show
      fallback={
        // Occupy the space in the screen for the tile "slot".
        <div class="invisible h-tile-sm w-tile-sm" />
      }
      when={props.tile}
    >
      {(_tile) => (
        <Tile
          // Make the 2nd tile appear on top of the first.
          class="even:absolute even:top-[-2px] even:left-0"
          concealed
          size="small"
          tile={_tile()}
        />
      )}
    </Show>
  );
};

export default TileSlot;
