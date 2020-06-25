import {
  ADD_FAVORITE_LOCATION,
  REMOVE_FAVORITE_LOCATION,
} from "../actions/types.js";

export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE_LOCATION:
      return [...state, action.payload];
    case REMOVE_FAVORITE_LOCATION:
      return state.filter((e) => e.key !== action.payload.key);
    default:
      return state;
  }
}
