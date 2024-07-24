import Tile from "components/Tile";
import { MahjongSuit, MahjongSuitTile } from "constants/tiles";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Tile",
  component: Tile,
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bamboo: Story = {
  args: {
    tile: new MahjongSuitTile(MahjongSuit.Bamboo, 1),
  },
};
