import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (GameQuery: GameQuery | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: GameQuery?.genre?.id,
        platforms: GameQuery?.platform?.id,
        ordering: GameQuery?.sortOrder,
      },
    },
    [GameQuery]
  );
export default useGame;
