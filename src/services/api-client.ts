import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4b1bc9e21e247bb8883b9432e6eb421",
  },
});
