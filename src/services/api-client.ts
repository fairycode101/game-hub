import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5d4b9aaab9324a059cc92d8e7114e22e",
  },
});
