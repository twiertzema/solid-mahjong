import { type MahjongWind, MahjongWinds } from "constants/tiles";

export default function getNextWind(wind: MahjongWind) {
  const windIndex = MahjongWinds.indexOf(wind);
  return MahjongWinds[(windIndex + 1) % MahjongWinds.length];
}
