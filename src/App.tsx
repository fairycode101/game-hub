import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/Games/GameGrid";
import GenreList from "./components/Genres/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/Games/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/Games/SortSelector";
import GameHeading from "./components/Games/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // lg: large
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={10}>
          <GenreList
            selectGenres={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main" padding={10}>
        <GameHeading GameQuery={gameQuery}></GameHeading>
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector
            selectPlatform={gameQuery.platform}
            setSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            selectSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => {
              setGameQuery({ ...gameQuery, sortOrder });
            }}
          ></SortSelector>
        </HStack>
        <GameGrid GameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
