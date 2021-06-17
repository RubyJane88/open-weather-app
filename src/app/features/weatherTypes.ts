import { WeatherModel } from "../models/WeatherModel";

export type WeatherStateType = {
  readonly weatherResult: WeatherModel;
  readonly loading: boolean;
};

export const weatherNamespace = "weather";

//action types
export const WeatherActionTypes = {
  FETCH_WEATHER: `${weatherNamespace}/FETCH_WEATHER`,
};
