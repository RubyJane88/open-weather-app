import React from "react";

type Props = {
  weekdayName: string;
  icon: string;
  minTemp: string;
  maxTemp: string;
};

const WeekTempCard = ({ weekdayName, icon, minTemp, maxTemp }: Props) => {
  return (
    <section className={"days-temp"}>
      <div>{weekdayName}</div>
      <div>
        <img
          className={"svg-icon-small"}
          alt={"icon"}
          src={require(`../../assets/icons/${icon}.svg`).default}
        />
      </div>
      <div>
        <span className={"temp-max"}>{maxTemp} ºC</span>
      </div>
      <div>
        <span className={"temp-min"}>{minTemp} ºC</span>
      </div>
    </section>
  );
};

export default WeekTempCard;
