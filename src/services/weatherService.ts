import { WeatherModel } from "../app/models/WeatherModel";
import { api, EndPoints } from "../app/axios";

export async function getWeatherAxios() {
  return await api.get<WeatherModel>(
    `${EndPoints.weatherEndpoint}onecall?lon=2.159&lat=41.3888&units=metric&appid=0a604843b916fd4abafddacfc4ac6755`
  );
}
