import { useGameStore } from "GameStore/context";
import type { GamePhase } from "GameStore/types";

export default function useSetPhase() {
  const { setStore } = useGameStore();

  return (phase: GamePhase) => {
    setStore("phase", phase);
  };
}
