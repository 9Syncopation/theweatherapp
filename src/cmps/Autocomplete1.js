import React from "react";
import { getAutocompleteSuggestions, getDayWeather, getLocation } from "../services/weatherApiService";
import { getCurrentWeather } from "../actions/indexActions";

class Autocomplete extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "",
      suggestions: [],
      selected: null,
    };
  }

  onSelectHandle = (key) => {
    this.setState({ ...this.state, suggestions: [], selected: key }, async () => {
		const result =await getLocation(this.state.selected)
        console.log("Autocomplete -> onSelectHandle -> result", result)
		// const res = result.data[0].Key
		// const res = await getDayWeather( result.data[0].Key);
        // console.log("Autocomplete -> onSelectHandle -> res", res)
		// const rrsss= this.props.dispatch(getCurrentWeather(res))
	});
  };

  getSuggestions = async (event) => {
    if (!event.target.value)
      return this.setState({ filter: "", suggestions: [] });
    this.setState({ ...this.state, filter: event.target.value }, () =>
      console.log(this.state)
    );
    const suggestions = await getAutocompleteSuggestions(this.state.filter);
    if (suggestions.length) this.setState({ ...this.state, suggestions });
  };

  render() {
    console.log(this.state);
    return (
      <div className="search-container">
		<input
		placeholder=" Enter city name"
          type="text"
          name="filter"
          onChange={this.getSuggestions}
          value={this.state.filter}
        />
        {this.state.suggestions.length > 0 && (
          <div className="suggestions">
            {this.state.suggestions.map((suggestion) => (
              <span onClick={() => this.onSelectHandle(suggestion.Key)} key={suggestion.Key}>
                {suggestion.LocalizedName}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
	  location: state.forecast[0],
	  city: state.locations
	};
  };

export default Autocomplete;
