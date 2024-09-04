import { MahjongDeck } from "constants/tiles";
import { shuffle } from "lodash";

export default function arrangeDeck() {
  const shuffled = shuffle(MahjongDeck);
  const wall = shuffled.slice(0, MahjongDeck.length - 14);
  const deadWall = shuffled.slice(MahjongDeck.length - 14);
  return { deadWall, wall };
}
