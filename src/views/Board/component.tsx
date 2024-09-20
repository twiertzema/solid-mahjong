import BoardWall from "components/BoardWall";
import { useGameStore } from "GameStore";
import useSetUpWall from "GameStore/actions/setUpWall";
import { onMount, type Component } from "solid-js";

const Board: Component = () => {
  const { store } = useGameStore();
  const setUpWall = useSetUpWall();

  onMount(() => setUpWall());

  return (
    <div>
      <BoardWall
        deadWind={store.deadWind}
        perspectiveWind={store.perspectiveWind}
        wall={store.wall}
      />

      {/* TODO: Render players' hands */}
    </div>
  );
};

export default Board;
