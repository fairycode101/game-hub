import useData from "./useData";

export interface Platform {
  id: 0;
  name: "string";
  slug: "string";
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
