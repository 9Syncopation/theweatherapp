import axios from "axios";

const WEATHER_API = "36hOar2y9A7aWtrMsE9qGXiJJDGRRx6t";

const FORECAST_URL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${WEATHER_API}`;

export async function getLocation(userInput = "tell aviv") {
  //   let locationsData = JSON.parse(localStorage.getItem("getLocation"));
  //   if (!locationsData) {
  try {
    let locationsData = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${WEATHER_API}&q=${userInput}`
    );

    // let cityKey = await getCityKey(userInput)
    // locationsData = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${WEATHER_API}`)
    localStorage.setItem("getLocation", JSON.stringify(locationsData));
    return locationsData;
  } catch (error) {
    throw error;
  }
  //   }
  //   return locationsData;
}
// export default getLocation

export async function getDayWeather(cityKey = "215854") {
  //   let currForecast = JSON.parse(localStorage.getItem("currforecast"));
  //   if (!currForecast) {
  try {
    // let currWeather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${WEATHER_API}`)
    let currForecast = await axios.get(
      // `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${WEATHER_API}`
      `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${WEATHER_API}`
    );
    //   localStorage.setItem("currforecast", JSON.stringify(currForecast));
    return currForecast;
  } catch (error) {
    throw error;
  }
}
//   return currForecast;
// }

export async function getFiveDaysForecast(userInput = "215854") {
  //   let fiveDForecast = JSON.parse(localStorage.getItem("fiveDaysForecast"));
  //   if (!fiveDForecast) {
  try {
    let fiveDForecast = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${userInput}?apikey=${WEATHER_API}`
    );
    //   localStorage.setItem("fiveDaysForecast", JSON.stringify(fiveDForecast));
    return fiveDForecast;
  } catch (error) {
    throw error;
  }
}
//   return fiveDForecast;
// }

export async function getAutocompleteSuggestions(inputValue) {
  let suggestions;
  try {
    suggestions = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_API}&q=te`
    );
    return suggestions.data;
  } catch (error) {
    return suggestions;
  }
}
