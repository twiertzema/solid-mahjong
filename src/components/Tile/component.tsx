import { Show, type Component, type JSX } from "solid-js";
import { capitalize } from "lodash";
import type { MahjongTile } from "constants/tiles";
import styles from "./styles.module.css";
import { defaultProps } from "utils/solid";
import { useTheme } from "theme";

export interface TileProps extends JSX.HTMLAttributes<HTMLDivElement> {
  concealed?: boolean;
  size?: "small" | "medium" | "large";
  tile: MahjongTile;
}

const Tile: Component<TileProps> = (props) => {
  const mergedProps = defaultProps({ concealed: false, size: "large" }, props);
  const theme = useTheme();

  return (
    <div
      classList={{
        ...(mergedProps.class && { [mergedProps.class]: true }),
        ...mergedProps.classList,
        [styles.tile]: true,
        [styles[mergedProps.size]]: true,
      }}
      onClick={mergedProps.onClick}
      style={{
        ...(mergedProps.concealed
          ? { "background-color": theme.colors.tile.concealed }
          : { "background-color": theme.colors.tile.background }),
        "border-color": theme.colors.tile.border,
        color: theme.colors.tile.typography,
      }}
    >
      <Show when={!mergedProps.concealed}>
        <span>{capitalize(mergedProps.tile.genus)}</span>
        <span>{capitalize(mergedProps.tile.species)}</span>
      </Show>
    </div>
  );
};

export default Tile;
