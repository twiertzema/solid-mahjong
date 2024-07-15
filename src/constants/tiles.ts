import { capitalize } from "lodash";

export enum MahjongSuit {
  Bamboo = "bamboo",
  Characters = "characters",
  Circles = "circles",
  Dragons = "dragons",
  Winds = "winds",
}

export const MahjongRank: Record<MahjongSuit, number[] | string[]> = {
  [MahjongSuit.Bamboo]: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [MahjongSuit.Characters]: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [MahjongSuit.Circles]: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [MahjongSuit.Dragons]: ["green", "red", "white"],
  [MahjongSuit.Winds]: ["east", "north", "south", "west"],
};

export class MahjongTile<
  Suit extends MahjongSuit = MahjongSuit,
  Rank = (typeof MahjongRank)[Suit][number],
> {
  readonly rank: Rank;
  readonly suit: Suit;

  constructor(suit: Suit, rank: Rank) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    return `${typeof this.rank === "string" ? capitalize(this.rank) : this.rank} of ${capitalize(this.suit)}`;
  }
}

export const MahjongDeck = [
  ...MahjongRank[MahjongSuit.Bamboo].map(
    (rank) => new MahjongTile(MahjongSuit.Bamboo, rank),
  ),
  ...MahjongRank[MahjongSuit.Characters].map(
    (rank) => new MahjongTile(MahjongSuit.Characters, rank),
  ),
  ...MahjongRank[MahjongSuit.Circles].map(
    (rank) => new MahjongTile(MahjongSuit.Circles, rank),
  ),
  ...MahjongRank[MahjongSuit.Dragons].map(
    (rank) => new MahjongTile(MahjongSuit.Dragons, rank),
  ),
  ...MahjongRank[MahjongSuit.Winds].map(
    (rank) => new MahjongTile(MahjongSuit.Winds, rank),
  ),
];
