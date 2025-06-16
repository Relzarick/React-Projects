import axios from "axios";

const APIclient = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

export default APIclient;
