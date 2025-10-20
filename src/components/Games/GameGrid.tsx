import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../../hooks/useGenres";
interface Props {
  selectGenres: Genre | null;
  selectPlatform: Platform | null;
}
function GameGrid({ selectGenres, selectPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectGenres, selectPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6} padding={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((item) => (
          <GameCardContainer key={item.id}>
            <GameCard game={item}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
