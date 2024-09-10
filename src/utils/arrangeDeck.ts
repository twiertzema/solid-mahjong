import { MahjongDeck } from "constants/tiles";
import type { GameWall } from "GameStore";
import { WALL_SEGMENT_HEIGHT, WALL_SEGMENT_WIDTH } from "GameStore/constants";
import { chunk, shuffle } from "lodash";

export default function arrangeDeck(): GameWall {
  const shuffled = shuffle(MahjongDeck);
  const segments = chunk(shuffled, WALL_SEGMENT_WIDTH * WALL_SEGMENT_HEIGHT);
  return {
    east: {
      tileSlots: chunk(segments[0], WALL_SEGMENT_HEIGHT),
    },
    north: {
      tileSlots: chunk(segments[1], WALL_SEGMENT_HEIGHT),
    },
    south: {
      tileSlots: chunk(segments[2], WALL_SEGMENT_HEIGHT),
    },
    west: {
      tileSlots: chunk(segments[3], WALL_SEGMENT_HEIGHT),
    },
  };
}
