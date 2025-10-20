import useData from "./useData";

export interface Platforms {
  id: 0;
  name: "string";
  slug: "string";
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
