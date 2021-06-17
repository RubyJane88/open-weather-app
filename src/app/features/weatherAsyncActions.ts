import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherAxios } from "../../services/weatherService";
import { WeatherActionTypes } from "./weatherTypes";

export const getWeatherAction = createAsyncThunk(
  WeatherActionTypes.FETCH_WEATHER,
  async () => {
    const { data } = await getWeatherAxios();
    return data;
  }
);
