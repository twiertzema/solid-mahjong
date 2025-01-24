import Tile from "components/Tile/component";
import type { MahjongTile } from "constants/tiles";
import { type Component, For, type JSX, createSignal } from "solid-js";

export interface TilePickerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  concealed?: boolean;
  disabled?: boolean;
  onPick: (tile: MahjongTile) => void;
  tiles: MahjongTile[];
}

const TilePicker: Component<TilePickerProps> = (props) => {
  const [selectedTile, setSelectedTile] = createSignal<MahjongTile>();

  return (
    <div class="flex w-min flex-row gap-4">
      <For each={props.tiles}>
        {(tile) => (
          <Tile
            classList={{
              "cursor-pointer": !props.disabled,
              "hover:border-red-500": !props.disabled,
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
