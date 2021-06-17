import weatherReducer from "../app/features/weatherSlice";
import { combineReducers } from "redux";

const injectedReducers = {
  weather: weatherReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
