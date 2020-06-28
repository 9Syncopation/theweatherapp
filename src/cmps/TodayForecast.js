import React from "react";
import { connect } from "react-redux";
import { addFavoriteLocation } from "../actions/indexActions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import cogoToast from "cogo-toast";
import Moment from "react-moment";

class TodayForecast extends React.Component {
  render() {
    const { todayForecast, city } = this.props;
    console.log(todayForecast);
    if (!todayForecast) return <h1>Loading</h1>;

    return (
      <div className="main-weather-area">
        <div className="widget">
          <div className="left-panel panel">
            <div className="date">
              <Moment format="dddd">{todayForecast.Date}</Moment>{" "}
              <Moment format="ll">{todayForecast.Date}</Moment>
              <div className="city">{city[0].LocalizedName}</div>
              <div className="weather-details">
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    todayForecast.Day.Icon < 10
                      ? `0${todayForecast.Day.Icon}`
                      : todayForecast.Day.Icon
                  }-s.png`}
                  alt="weather"
                />
                <div className="temp">
                  {(todayForecast.Temperature.Minimum.Value +
                    todayForecast.Temperature.Minimum.Value) /
                    2}
                  &deg;F
                </div>
              </div>
              <div className="icon-phrase">{todayForecast.Day.IconPhrase}</div>
            </div>
          </div>
          <div className="right-panel panel">
            <BookmarkBorderIcon
              fontSize="large"
              color="secondary"
              onClick={() => {
                this.props.dispatch(
                  addFavoriteLocation({
                    key: todayForecast.Key,
                    city: todayForecast.LocalizedName,
                  })
                );
                cogoToast.success(`City added to Favorites`);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps -> state", state)
  return {
    todayForecast: state.forecast[0],
    city: state.locations,
  };
};

export default connect(mapStateToProps, null)(TodayForecast);
