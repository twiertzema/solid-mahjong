import { mergeProps } from "solid-js";

/**
 * A wrapper around {@link mergeProps} that enforces that the default props be
 *   a subset of the props' type.
 */
export function defaultProps<
  Props extends object,
  const Defaults extends Partial<Props>,
>(defaults: Defaults, props: Props) {
  return mergeProps(defaults, props);
}
