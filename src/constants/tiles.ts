import { capitalize } from "lodash";

export enum MahjongSuit {
  Bamboo = "bamboo",
  Characters = "characters",
  Circles = "circles",
}

export enum MahjongHonor {
  Dragons = "dragons",
  Winds = "winds",
}
export const MahjongHonorType: Record<MahjongHonor, string[]> = {
  [MahjongHonor.Dragons]: ["green", "red", "white"],
  [MahjongHonor.Winds]: ["east", "north", "south", "west"],
};

export class MahjongSuitTile<Suit extends MahjongSuit = MahjongSuit> {
  constructor(
    readonly suit: Suit,
    readonly rank: number,
  ) {}

  toString() {
    return `${this.rank} of ${capitalize(this.suit)}`;
  }
}

export class MahjongHonorTile<Honor extends MahjongHonor = MahjongHonor> {
  constructor(
    readonly honor: Honor,
    readonly type: string,
  ) {}

  toString() {
    return `${capitalize(this.type)} of ${capitalize(this.honor)}`;
  }
}

export type MahjongTile = MahjongSuitTile | MahjongHonorTile;

export function isSuitTile(tile: MahjongTile): tile is MahjongSuitTile {
  return Object.hasOwn(tile, "suit");
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
