import APIKEY from "./APIKey";
import APIclient from "./APIclient";

const fetchForecast = (location = "Singapore") => {
  return APIclient.get("/forecast.json", {
    params: {
      key: APIKEY,
      q: location,
      days: 7,
    },
  })
    .then((res) => res.data)
    .catch((err) => console.log("Error fetching weather forecast:", err));
};

export default fetchForecast;
