import axios from "axios";

const WEATHER_API = "VT5xz9noZiHAPWPXkOUiWhZWxFOATJTR";

// const FORECAST_URL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${WEATHER_API}`;

export async function getLocation(userInput) {
    console.log("getLocation -> userInput", userInput)
    // let locationsData = JSON.parse(localStorage.getItem("getLocation"));
    // if (!locationsData) {
  try {
    let locationsData = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${WEATHER_API}&q=${userInput}`
    );
    console.log("getLocation -> locationsData", locationsData)

    // let cityKey = await getCityKey(userInput)
    // locationsData = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${WEATHER_API}`)
    // localStorage.setItem("getLocation", JSON.stringify(locationsData));
    return locationsData;
  } catch (error) {
    throw error;
  }
    // }
    // return locationsData;
}
export default getLocation

// export async function getDayWeather(cityKey ) {
//   console.log("getDayWeather -> cityKey", cityKey)
//     let currForecast = JSON.parse(localStorage.getItem("currforecast"));
//     if (!currForecast) {
//   try {
//     // let currWeather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${WEATHER_API}`)
//     let currForecast = await axios.get(
//       // `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${WEATHER_API}`
//       `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${WEATHER_API}`
//     );
//       localStorage.setItem("currforecast", JSON.stringify(currForecast));
//     console.log("getDayWeather -> currForecast", currForecast)
//     return currForecast;
//   } catch (error) {
//     throw error;
//   }
// }
//   return currForecast;
// }

export async function getFiveDaysForecast(userInput ) {
    console.log("getFiveDaysForecast -> userInput", userInput)
    // let fiveDForecast = JSON.parse(localStorage.getItem("fiveDaysForecast"));
    // if (!fiveDForecast) {
  try {
    let fiveDForecast = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${userInput}?apikey=${WEATHER_API}`
    );
    //   localStorage.setItem("fiveDaysForecast", JSON.stringify(fiveDForecast));
    console.log("getFiveDaysForecast -> fiveDForecast", fiveDForecast)
    return fiveDForecast;
  } catch (error) {
    throw error;
  }
// }
//   return fiveDForecast;
}

export async function getAutocompleteSuggestions(inputValue) {
  console.log("getAutocompleteSuggestions -> inputValue", inputValue)
  let suggestions;
  try {
    suggestions = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API}&q=${inputValue}`
	);
    console.log("getAutocompleteSuggestions -> suggestions", suggestions)
	
    return suggestions.data;
  } catch (error) {
    return suggestions;
  }
}
