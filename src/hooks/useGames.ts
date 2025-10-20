import useData from "./useData";
import { Genre } from "./useGenres";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (selectGenres: Genre | null, selectPlatform: Platform | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectGenres?.id, platforms: selectPlatform?.id } },
    [selectGenres?.id, selectPlatform?.id]
  );
export default useGame;
