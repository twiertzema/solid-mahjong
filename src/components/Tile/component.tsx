import { Show, type Component, type JSX } from "solid-js";
import { capitalize } from "lodash";
import type { MahjongTile } from "constants/tiles";
import styles from "./styles.module.css";
import { defaultProps } from "utils/solid";

export interface TileProps extends JSX.HTMLAttributes<HTMLDivElement> {
  concealed?: boolean;
  tile: MahjongTile;
}

const Tile: Component<TileProps> = (props) => {
  const mergedProps = defaultProps({ concealed: false }, props);

  return (
    <div
      classList={{
        ...(mergedProps.class && { [mergedProps.class]: true }),
        ...mergedProps.classList,
        [styles.tile]: true,
        [styles.concealed]: mergedProps.concealed,
      }}
      onClick={mergedProps.onClick}
    >
      <Show when={!mergedProps.concealed}>
        <p>{capitalize(mergedProps.tile.genus)}</p>
        <p>{capitalize(mergedProps.tile.species)}</p>
      </Show>
    </div>
  );
};

export default Tile;
