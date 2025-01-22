import type { Component } from "solid-js";
import type { Preview } from "storybook-solidjs";
import "../src/index.css";

const preview: Preview = {
  decorators: [(Story: Component) => <Story />],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
