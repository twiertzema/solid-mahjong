import { type JSX, type ParentComponent, mergeProps } from "solid-js";
import styles from "./styles.module.css";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

const Button: ParentComponent<ButtonProps> = (props) => {
  const mergedProps = mergeProps({ size: "medium" }, props);

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
      // Make the buttons look like tiles.
      class="bg-tile-front text-tile-text"
      onClick={mergedProps.onClick}
      type={mergedProps.type}
    >
      {mergedProps.children}
    </button>
  );
};

export default Button;
