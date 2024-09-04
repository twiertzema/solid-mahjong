import Tile from "components/Tile";
import {
  MahjongHonor,
  MahjongHonorTile,
  MahjongSuit,
  MahjongSuitTile,
} from "constants/tiles";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Tile",
  component: Tile,
  tags: ["autodocs"],
  args: {
    concealed: false,
  },
  argTypes: {
    concealed: { control: "boolean" },
    size: { control: "select", options: ["small", "medium", "large"] },
  },
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bamboo: Story = {
  args: {
    tile: new MahjongSuitTile(MahjongSuit.Bamboo, 1),
  },
};

export const Characters: Story = {
  args: {
    tile: new MahjongSuitTile(MahjongSuit.Characters, 1),
  },
};

export const Circle: Story = {
  args: {
    tile: new MahjongSuitTile(MahjongSuit.Circles, 1),
  },
};

export const Dragon: Story = {
  args: {
    tile: new MahjongHonorTile(MahjongHonor.Dragons, "red"),
  },
};

export const Wind: Story = {
  args: {
    tile: new MahjongHonorTile(MahjongHonor.Dragons, "east"),
  },
};
