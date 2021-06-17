import DailyTemp from "app/components/DailyTemp";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherAction } from "../app/features/weatherAsyncActions";
import { RootState } from "../store/reducers";

const WeatherPage = () => {
  const dispatch = useDispatch();
  const { weatherResult, loading } = useSelector(
    (state: RootState) => state.weather
  );

  useEffect(() => {
    dispatch(getWeatherAction());
  }, []);

  return (
    <div className={"weather-root-app"}>
      <section className={"weather-app"}>
        <header>
          <div className={"header-icon-wrap"}>
            {weatherResult?.current && (
              <img
                className={"svg-icon"}
                alt={"icon"}
                src={
                  require(`../assets/icons/${weatherResult.current.weather[0].icon}.svg`)
                    .default
                }
              />
            )}
          </div>

          <div className={"header-content-wrap"}>
            <h3 className={"header-location"}>{weatherResult.timezone}</h3>
            <h4 className={"header-temp"}>
              {weatherResult.current?.temp.toFixed()} ºC
            </h4>
            <p>Humidity: {weatherResult.current?.humidity} </p>
            <p>UVI: {weatherResult.current?.uvi} </p>
            <p>Wind: {weatherResult.current?.wind_deg} meter/sec</p>
          </div>
        </header>

        <section className={"weather-app-body"}>
          <DailyTemp />
        </section>
      </section>
    </div>
  );
};

export default WeatherPage;
