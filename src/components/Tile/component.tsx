import { Show, type Component, type JSX } from "solid-js";
import { capitalize } from "lodash";
import type { MahjongTile } from "constants/tiles";
import styles from "./styles.module.css";
import { defaultProps } from "utils/solid";
import { useTheme } from "theme";

export interface TileProps extends JSX.HTMLAttributes<HTMLDivElement> {
  concealed?: boolean;
  tile: MahjongTile;
}

const Tile: Component<TileProps> = (props) => {
  const mergedProps = defaultProps({ concealed: false }, props);
  const theme = useTheme();

  return (
    <div
      classList={{
        ...(mergedProps.class && { [mergedProps.class]: true }),
        ...mergedProps.classList,
        [styles.tile]: true,
      }}
      onClick={mergedProps.onClick}
      style={{
        ...(mergedProps.concealed
          ? { "background-color": theme.colors.tile.concealed }
          : { "background-color": theme.colors.tile.background }),
        "border-color": theme.colors.tile.border,
        color: theme.colors.tile.color,
      }}
    >
      <Show when={!mergedProps.concealed}>
        <p>{capitalize(mergedProps.tile.genus)}</p>
        <p>{capitalize(mergedProps.tile.species)}</p>
      </Show>
    </div>
  );
};

export default Tile;
