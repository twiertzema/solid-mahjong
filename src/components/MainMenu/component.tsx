import type { Component } from "solid-js";
import styles from "./styles.module.css";
import Button from "components/Button";

const MainMenu: Component = () => {
  return (
    <div class={styles.container}>
      <h1>Solid Mahjong</h1>

      <div class={styles.buttons}>
        {/* TODO: Transition state to determine phase order. */}
        <Button
          onClick={() => {
            console.log("start");
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
