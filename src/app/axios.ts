import axios from "axios";

export const api = axios.create();

export const EndPoints = {
  weatherEndpoint: "https://api.openweathermap.org/data/2.5/",
  geocodingEndpoint: "",
};
