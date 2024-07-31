import { capitalize } from "lodash";

export enum MahjongSuit {
  Bamboo = "bamboo",
  Characters = "characters",
  Circles = "circles",
}

export type MahjongWind = "east" | "north" | "south" | "west";
export const MahjongWinds: MahjongWind[] = ["east", "north", "south", "west"];

export enum MahjongHonor {
  Dragons = "dragons",
  Winds = "winds",
}
export const MahjongHonorType: Record<MahjongHonor, string[]> = {
  [MahjongHonor.Dragons]: ["green", "red", "white"],
  [MahjongHonor.Winds]: ["east", "north", "south", "west"] as MahjongWind[],
};

export abstract class MahjongTile {
  abstract readonly genus: string;
  abstract readonly species: string;

  toString() {
    return `${this.genus} of ${capitalize(this.species)}`;
  }
}

export class MahjongSuitTile<Suit extends MahjongSuit = MahjongSuit>
  implements MahjongTile
{
  constructor(
    readonly suit: Suit,
    readonly rank: number,
  ) {}

  get genus() {
    return this.suit;
  }

  get species() {
    return this.rank.toString();
  }
}

export class MahjongHonorTile<Honor extends MahjongHonor = MahjongHonor>
  implements MahjongTile
{
  constructor(
    readonly honor: Honor,
    readonly type: string,
  ) {}

  get species() {
    return this.type;
  }

  get genus() {
    return this.honor;
  }
}

export function isSuitTile(tile: MahjongTile): tile is MahjongSuitTile {
  return tile instanceof MahjongSuitTile;
}

export function isHonorTile(tile: MahjongTile): tile is MahjongHonorTile {
  return tile instanceof MahjongHonorTile;
}

export const MahjongDeck: MahjongTile[] = [];

// Add suited tiles.
for (const suit of [
  MahjongSuit.Bamboo,
  MahjongSuit.Characters,
  MahjongSuit.Circles,
]) {
  // Iterate over every rank in that suit...
  for (let rank = 0; rank < 9; rank++) {
    // And add 4 tiles for that rank in that suit.
    for (let i = 0; i < 4; i++) {
      MahjongDeck.push(new MahjongSuitTile(suit, rank + 1));
    }
  }
}

// Add honor tiles.
for (const honor of [MahjongHonor.Dragons, MahjongHonor.Winds]) {
  // Iterate over the types in the honor...
  for (const honorType of MahjongHonorType[honor]) {
    // And add 4 tiles for that type of that honor.
    for (let i = 0; i < 4; i++) {
      MahjongDeck.push(new MahjongHonorTile(honor, honorType));
    }
  }
}
