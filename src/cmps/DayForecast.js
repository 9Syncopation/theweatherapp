import React from "react";
import Moment from "react-moment";
import setWeatherIcon from "../services/setWeatherIcon"

const DayForcast = ({ forecast }) => {
  return (
    <div className="box">
	  <div className="weatherIcon">
	  {React.createElement(setWeatherIcon(forecast.Day.Icon))}
      </div>

      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>

      <div className="info">
        <h2 className="IconPhrase">{forecast.Day.IconPhrase}</h2>
        <Moment format="dddd">{forecast.Date}</Moment> <br />
        <Moment format="ll">{forecast.Date}</Moment>
        <h1 className="temp">
          {(forecast.Temperature.Minimum.Value +
            forecast.Temperature.Minimum.Value) /
            2}
          &deg;F
        </h1>
      </div>
    </div>
  );
};

export default DayForcast;
