import {
  ADD_FIVEDAYSFORECAST,
  GET_CITY_CURRENT_WEATHER,
} from "../actions/types.js";

export function forecastReducer(state = [], action) {
  switch (action.type) {
    case ADD_FIVEDAYSFORECAST:
      return [...action.payload];

    default:
      return state;
  }
}
export function dayForecastReducer(state = [], action) {
  switch (action.type) {
    case GET_CITY_CURRENT_WEATHER:
      return [{ ...action.payload }];

    default:
      return state;
  }
}
