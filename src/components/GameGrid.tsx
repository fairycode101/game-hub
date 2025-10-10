import useGames from "../hooks/useGames";
function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <text>{error}</text>}
      <ul>
        {games.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
