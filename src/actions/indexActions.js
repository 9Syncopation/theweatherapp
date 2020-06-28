import {
  GET_LOCATION_WEATHER_REQUEST,
//   GET_CITY_CURRENT_WEATHER,
  ADD_FIVEDAYSFORECAST,
  ADD_FAVORITE_LOCATION,
  REMOVE_FAVORITE_LOCATION,
} from "./types.js";
import {
  getLocation,
  getFiveDaysForecast,
//   getDayWeather,
} from "../services/weatherApiService";

export const getLocationRequest = (userInput = "tel aviv") => {
	// debugger
  return async (dispatch) => {
    const data = await getLocation(userInput);
    return dispatch({
      type: GET_LOCATION_WEATHER_REQUEST,
      payload: data.data[0],
    });
  };
};

// export const getCurrentWeather = (userSelection ) => {
//   console.log("getCurrentWeather -> userSelection", userSelection)
//   return async (dispatch) => {
//     const data = await getDayWeather(userSelection);
//     return dispatch({
//       type: GET_CITY_CURRENT_WEATHER,
//       payload: data.data.DailyForecasts,
//     });
//   };
// };
export const fiveDaysForecast = (userSelection= "215854") => {
	debugger
  console.log("fiveDaysForecast -> userSelection", userSelection)
  return async (dispatch) => {
    const data = await getFiveDaysForecast(userSelection);
    console.log("fiveDaysForecast -> data", data)
    return dispatch({
      type: ADD_FIVEDAYSFORECAST,
      payload: data.data.DailyForecasts,
    });
  };
};
export const addFavoriteLocation = (data) => {
  return {
    type: ADD_FAVORITE_LOCATION,
    payload: {
      key: data.key,
      city: data.city,
    },
  };
};

export const removeFavoriteLocation = (key) => {
  return {
    type: REMOVE_FAVORITE_LOCATION,
    payload: {
      key,
    },
  };
};
