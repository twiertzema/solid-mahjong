import type { Component } from "solid-js";
import styles from "./styles.module.css";
import Button from "components/Button";
import { useSetPhase } from "GameStore";
import { GamePhase } from "GameStore/types";

const MainMenu: Component = () => {
  const setPhase = useSetPhase();

  return (
    <div class={styles.container}>
      <h1>Solid Mahjong</h1>

      <div class={styles.buttons}>
        <Button
          onClick={() => {
            setPhase(GamePhase.DeterminingTurnOrder);
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
