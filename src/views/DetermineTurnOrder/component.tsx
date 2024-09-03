import TilePicker from "components/TilePicker";
import {
  MahjongHonor,
  MahjongHonorTile,
  type MahjongWind,
} from "constants/tiles";
import { shuffle } from "lodash";
import type { Component } from "solid-js";
import styles from "./styles.module.css";
import { useGameState } from "GameState";
import { GamePhase } from "GameState/types";

const DeterminineTurnOrder: Component = () => {
  const { setPhase, setTurnOrder } = useGameState();

  const windTiles = shuffle([
    new MahjongHonorTile(MahjongHonor.Winds, "east"),
    new MahjongHonorTile(MahjongHonor.Winds, "south"),
    new MahjongHonorTile(MahjongHonor.Winds, "west"),
    new MahjongHonorTile(MahjongHonor.Winds, "north"),
  ]);

  return (
    <div class={styles.container}>
      <TilePicker
        concealed
        onPick={(tile) => {
          setTimeout(() => {
            setTurnOrder(tile.genus as MahjongWind);
            setPhase(GamePhase.Dealing);
          }, 1000);
        }}
        tiles={windTiles}
      />
    </div>
  );
};

export default DeterminineTurnOrder;
