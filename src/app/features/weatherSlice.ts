import { createSlice } from "@reduxjs/toolkit";
import { weatherNamespace, WeatherStateType } from "./weatherTypes";
import { getWeatherAction } from "./weatherAsyncActions";

import { WeatherModel } from "../models/WeatherModel";

//weather state
export const initialState: WeatherStateType = {
  weatherResult: {} as WeatherModel,
  loading: false,
};

//weather store
export const weatherSlice = createSlice({
  name: weatherNamespace,

  initialState,
  //mutate using synchronous actions
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getWeatherAction.fulfilled, (state, action) => {
      state.weatherResult = action.payload;
      state.loading = false;
    });
  },
});

export default weatherSlice.reducer;
