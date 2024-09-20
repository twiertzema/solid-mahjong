import { useGameStore } from "GameStore";
import { produce } from "solid-js/store";
import arrangeDeck from "utils/arrangeDeck";

export default function useSetUpWall() {
  const { setStore } = useGameStore();

  return () =>
    setStore(
      produce((store) => {
        store.wall = arrangeDeck();
      }),
    );
}
