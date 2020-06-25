import React from "react";
import { connect } from "react-redux";
import DayForecast from "./DayForecast";
import TodayForecast from "./TodayForecast";
import UtilsService from '../services/UtilsService';


const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    favorites: state.favorites,
    forecasts: state.forecast,
    dayForecast: state.dayForecast,
  };
};

class MainWeather extends React.Component {
  render() {
    console.log(this.props);
    if (!this.props.dayForecast[0]) return <h1>Loading</h1>;
    return (
      <section className="screen-layout">
        <TodayForecast />
        <section className="forecast-cards">
          {this.props.forecasts.map((forecast) => (
            <DayForecast forecast={forecast} key={UtilsService._makeId()} />
          ))}
        </section>
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(MainWeather);
