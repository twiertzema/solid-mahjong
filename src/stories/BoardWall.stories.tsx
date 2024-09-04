import BoardWall from "components/BoardWall";
import type { Meta, StoryObj } from "storybook-solidjs";
import arrangeDeck from "utils/arrangeDeck";

const meta = {
  title: "BoardWall",
  component: BoardWall,
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
