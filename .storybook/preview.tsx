import type { Preview } from "storybook-solidjs";
import { ThemeContextProvider } from "../src/theme";
import "../src/index.css";
import type { Component } from "solid-js";

const preview: Preview = {
  decorators: [
    (Story: Component) => (
      <ThemeContextProvider>
        <Story />
      </ThemeContextProvider>
    ),
  ],
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
