import {
  GET_LOCATION_WEATHER_REQUEST,
//   GET_CITY_KEY,
  GET_CITY_CURRENT_WEATHER,
  ADD_FIVEDAYSFORECAST,
  ADD_FAVORITE_LOCATION,
  REMOVE_FAVORITE_LOCATION,
} from "./types.js";
import {
  getLocation,
  getFiveDaysForecast,
  getDayWeather,
  getCityKey,
} from "../services/weatherApiService";

export const getLocationRequest = (userInput = "tel aviv") => {
  return async (dispatch) => {
    const data = await getLocation(userInput);
    return dispatch({
      type: GET_LOCATION_WEATHER_REQUEST,
      payload: data.data[0],
    });
  };
};

export const getCurrentWeather = (inputValue) => {
  console.log("getCurrentWeather -> inputValue", inputValue)
  return async (dispatch) => {
    const data = await getDayWeather();
    console.log("getCurrentWeather -> data", data)
    return dispatch({
      type: GET_CITY_CURRENT_WEATHER,
      payload: data.data.DailyForecasts,
    });
  };
};
export const fiveDaysForecast = () => {
  return async (dispatch) => {
    const data = await getFiveDaysForecast();
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
