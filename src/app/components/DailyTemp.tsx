import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { getWeatherAction } from "../features/weatherAsyncActions";
import WeekTempCard from "./WeekTempCard";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DailyTemp = () => {
  const dispatch = useDispatch();

  const { weatherResult, loading } = useSelector(
    (state: RootState) => state.weather
  );

  useEffect(() => {
    dispatch(getWeatherAction());
  }, []);

  return (
    <div>
      <div>
        {/* to get the days of the week */}
        <div className={"day-name"}>
          {weatherResult.daily?.map((daily) => {
            let day = new Date();
            day.setTime(daily.dt * 1000);
            day.toUTCString();
            day.getDay();

            return (
              <WeekTempCard
                weekdayName={dayNames[day.getDay()]}
                icon={daily.weather[0].icon}
                minTemp={daily.temp.max.toFixed()}
                maxTemp={daily.temp.min.toFixed()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailyTemp;
