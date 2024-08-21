import type { Meta, StoryObj } from "storybook-solidjs";
import { fn } from "@storybook/test";

import Button from "components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button",
    onClick: fn(),
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    size: "large",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    onClick: fn(),
    size: "small",
  },
};
