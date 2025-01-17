import { fn } from "@storybook/test";
import TilePicker from "components/TilePicker";
import { MahjongHonor, MahjongHonorTile } from "constants/tiles";
import type { Meta, StoryObj } from "storybook-solidjs";

const meta = {
  title: "Mahjong/TilePicker",
  component: TilePicker,
  args: {
    concealed: true,
    disabled: false,
  },
} satisfies Meta<typeof TilePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TilePickerStory: Story = {
  args: {
    onPick: fn(),
    tiles: [
      new MahjongHonorTile(MahjongHonor.Winds, "east"),
      new MahjongHonorTile(MahjongHonor.Winds, "south"),
      new MahjongHonorTile(MahjongHonor.Winds, "west"),
      new MahjongHonorTile(MahjongHonor.Winds, "north"),
    ],
  },
};
