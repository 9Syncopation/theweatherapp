import React from "react";
import { connect } from "react-redux";
import { addFavoriteLocation } from "../actions/indexActions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import cogoToast from "cogo-toast";
import Moment from "react-moment";

class TodayForecast extends React.Component {
  render() {
    const { location, city } = this.props;
    console.log(location);
    if (!location) return <h1>Loading</h1>;

    return (
      <div className="main-weather-area">
        <div className="widget">
          <div className="left-panel panel">
            <div className="date">
              <Moment format="dddd">{location.Date}</Moment>{" "}
              <Moment format="ll">{location.Date}</Moment>
              <div className="city">city[0].LocalizedName</div>
              <div className="weather-details">
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    location.Day.Icon < 10
                      ? `0${location.Day.Icon}`
                      : location.Day.Icon
                  }-s.png`}
                  alt="weather"
                />
                <div className="temp">
                  {(location.Temperature.Minimum.Value +
                    location.Temperature.Minimum.Value) /
                    2}
                  &deg;F
                </div>
              </div>
              <div className="icon-phrase">{location.Day.IconPhrase}</div>
            </div>
          </div>
          <div className="right-panel panel">
            <BookmarkBorderIcon
              fontSize="large"
              color="secondary"
              onClick={() => {
                this.props.dispatch(
                  addFavoriteLocation({
                    key: location.Key,
                    city: location.LocalizedName,
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
  return {
    location: state.forecast[0],
    city: state.locations,
  };
};

export default connect(mapStateToProps, null)(TodayForecast);
