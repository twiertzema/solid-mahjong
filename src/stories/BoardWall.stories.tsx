import BoardWall from "components/BoardWall";
import { MahjongWinds } from "constants/tiles";
import { DEAD_WALL_WIDTH } from "GameStore/constants";
import type { Meta, StoryObj } from "storybook-solidjs";
import arrangeDeck from "utils/arrangeDeck";

const meta = {
  title: "Mahjong/BoardWall",
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

const wall = arrangeDeck();

// Set the dead wall.
wall.east.deadTileSlots = wall.east.tileSlots.splice(-DEAD_WALL_WIDTH);

export const BoardWallStory: Story = {
  args: {
    wall,
  },
};
