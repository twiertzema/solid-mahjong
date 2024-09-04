import { type ParentComponent, type JSX, mergeProps } from "solid-js";
import { useTheme } from "theme";
import styles from "./styles.module.css";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

const Button: ParentComponent<ButtonProps> = (props) => {
  const mergedProps = mergeProps({ size: "medium" }, props);
  const theme = useTheme();

  return (
    <button
      classList={{
        ...mergedProps.classList,
        [styles.button]: true,
        [styles.small]: mergedProps.size === "small",
        [styles.medium]: mergedProps.size === "medium",
        [styles.large]: mergedProps.size === "large",
        // TODO: Active styles.
      }}
      onClick={mergedProps.onClick}
      style={{
        // Make the buttons look like tiles.
        ...theme.components.tile.large.style,
        "background-color": theme.colors.tile.background,
        color: theme.colors.tile.typography,
      }}
      type={mergedProps.type}
    >
      {mergedProps.children}
    </button>
  );
};

export default Button;
