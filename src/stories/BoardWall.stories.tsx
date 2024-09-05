import BoardWall from "components/BoardWall";
import { MahjongWinds } from "constants/tiles";
import type { Meta, StoryObj } from "storybook-solidjs";
import arrangeDeck from "utils/arrangeDeck";

const meta = {
  title: "BoardWall",
  component: BoardWall,
  argTypes: {
    deadWind: {
      control: "select",
      options: MahjongWinds,
    },
    perspectiveWind: {
      options: MahjongWinds,
    },
  },
  args: {
    deadWind: "west",
    perspectiveWind: "east",
  },
} satisfies Meta<typeof BoardWall>;

export default meta;
type Story = StoryObj<typeof meta>;

const { deadWall, wall } = arrangeDeck();

export const BoardWallStory: Story = {
  args: {
    deadWall,
    wall,
  },
};
