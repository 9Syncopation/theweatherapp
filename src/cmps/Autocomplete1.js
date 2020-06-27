import React from "react";
import {
  getAutocompleteSuggestions,
  getDayWeather,
  getLocation,
} from "../services/weatherApiService";
import { getCurrentWeather } from "../actions/indexActions";
import { connect } from "react-redux";

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
    this.setState(
      { ...this.state, suggestions: [], selected: key},
      async () => {
		debugger;
		const selected =( this.state.selected ? this.state.selected : "215854")
		console.log("Autocomplete -> onSelectHandle -> selected", selected)
		
		       this.props.getCurrentWeather(selected)





		// getCurrentWeather(this.state.selected) 
        // const weather = await getDayWeather(this.state.selected);
		// console.log("Autocomplete -> onSelectHandle -> weather", weather);
        //   const result =await getLocation(this.state.selected)
        //   const res = await getDayWeather( result.data[0].Key);
        //   const res = result.data[0].Key
        //   console.log("Autocomplete -> onSelectHandle -> res", res)
        //   console.log("Autocomplete -> onSelectHandle -> result", result)
      }
    );
  };

  getSuggestions = async (event) => {
    if (!event.target.value)
      return this.setState({ filter: "", suggestions: [] });
    this.setState({ ...this.state, filter: event.target.value }, () =>
      console.log(this.state)
	);
	console.log("Autocomplete -> getSuggestions -> this.state.filter.length", this.state.filter.length)
	if (this.state.filter.length >1) {
		// debugger
		console.log('enter reques!!!!!!!!!!!t');
		
		const suggestions = await getAutocompleteSuggestions(this.state.filter);
        console.log("Autocomplete -> getSuggestions -> suggestions", suggestions)
		if (suggestions && suggestions.length>1) this.setState({ ...this.state, suggestions });
	}
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
              <span
                onClick={() => this.onSelectHandle(suggestion.Key)}
                key={suggestion.Key}
              >
                {suggestion.LocalizedName}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     location: state.forecast[0],
//     city: state.locations,
//   };
// };
const mapDispatchToProps = (dispatch) =>  ({
	  getCurrentWeather:  () =>  dispatch( getCurrentWeather())
})

export default connect(null, mapDispatchToProps)(Autocomplete)

// export default Autocomplete;
