import React, { Component } from "react";
import MainWeather from "../cmps/MainWeather";
import { getLocationRequest } from "../actions/indexActions";
import Autocomplete from "../cmps/Autocomplete1";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    favorites: state.favorites,
    forecasts: state.forecast,
  };
};

class HomePage extends Component {
  onSearch = async (ev) => {
    if (ev.keyCode === 13) {
      let input = ev.target.value;
      this.props.dispatch(getLocationRequest(input));
      cogoToast.loading(`Loading ${input} weather`);
    }
  };

  render() {
    return (
      <section>      
        <Autocomplete />
        <MainWeather />
      </section>
    );
  }
}
export default connect(mapStateToProps, null)(HomePage);
