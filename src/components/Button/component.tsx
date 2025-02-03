import { type JSX, type ParentComponent, mergeProps } from "solid-js";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

const Button: ParentComponent<ButtonProps> = (props) => {
  const mergedProps = mergeProps({ size: "medium" }, props);

  return (
    <button
      // Make the buttons look like tiles.
      class="tile-border-lg box-content cursor-pointer bg-tile-front text-tile-text"
      classList={{
        ...mergedProps.classList,
        "p-2": mergedProps.size === "small",
        "w-32": mergedProps.size === "medium",
        "p-4": mergedProps.size === "medium",
        "w-48": mergedProps.size === "large",
        "p-6": mergedProps.size === "large",
        "text-xl": mergedProps.size === "large",
        // TODO: Active styles.
      }}
      onClick={mergedProps.onClick}
      type={mergedProps.type}
    >
      {mergedProps.children}
    </button>
  );
};

export default Button;
