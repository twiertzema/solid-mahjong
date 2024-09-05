const WALL_SEGMENT_WIDTH = 17;
const WALL_SEGMENT_HEIGHT = 2;

export default function getTileSlots() {
  return Array(WALL_SEGMENT_WIDTH).fill(Array(WALL_SEGMENT_HEIGHT).fill([]));
}
