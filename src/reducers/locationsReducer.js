import { GET_LOCATION_WEATHER_REQUEST } from "../actions/types.js";

export default function locationsReducer(state = [], action) {
  switch (action.type) {
    case GET_LOCATION_WEATHER_REQUEST:
      return [{ ...action.payload }];

    default:
      return state;
  }
}
