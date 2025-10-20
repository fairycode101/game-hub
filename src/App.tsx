import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/Games/GameGrid";
import GenreList from "./components/Genres/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/Games/PlatformSelector";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectGenres, setSelectGenres] = useState<Genre | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
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
        <GridItem area="aside">
          <GenreList
            selectGenres={selectGenres}
            onSelectGenre={(genre) => setSelectGenres(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          selectPlatform={selectPlatform}
          setSelectPlatform={(Platform) => setSelectPlatform(Platform)}
        />
        <GameGrid
          selectGenres={selectGenres}
          selectPlatform={selectPlatform}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
