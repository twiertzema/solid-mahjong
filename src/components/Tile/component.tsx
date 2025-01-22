import { clsx } from "clsx";
import type { MahjongTile } from "constants/tiles";
import { capitalize } from "lodash";
import { type Component, type JSX, Show } from "solid-js";
import type { TileSize } from "types/tiles";
import { defaultProps } from "utils/solid";

export interface TileProps extends JSX.HTMLAttributes<HTMLDivElement> {
  concealed?: boolean;
  size?: TileSize;
  tile: MahjongTile;
}

const Tile: Component<TileProps> = (props) => {
  const mergedProps = defaultProps({ concealed: false, size: "large" }, props);

  return (
    <div
      class={clsx(
        "box-border",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "text-tile-text",
        mergedProps.size === "small" && [
          "h-tile-sm",
          "w-tile-sm",
          "tile-border-sm",
          "text-tile-sm",
        ],
        mergedProps.size === "medium" && [
          "h-tile-md",
          "w-tile-md",
          "tile-border-md",
          "text-tile-md",
        ],
        mergedProps.size === "large" && [
          "h-tile-lg",
          "w-tile-lg",
          "tile-border-lg",
          "text-tile-lg",
        ],
        mergedProps.concealed ? "bg-tile-back" : "bg-tile-front",
        mergedProps.class,
      )}
      classList={mergedProps.classList}
      onClick={mergedProps.onClick}
    >
      <Show when={!mergedProps.concealed}>
        <span>{capitalize(mergedProps.tile.genus)}</span>
        <span>{capitalize(mergedProps.tile.species)}</span>
      </Show>
    </div>
  );
};

export default Tile;
