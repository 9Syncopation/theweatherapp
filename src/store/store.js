import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/indexReducers";
import {
  getLocationRequest,
  fiveDaysForecast,
//   getCurrentWeather,
} from "../actions/indexActions";
// import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const locationRequest = getLocationRequest();
// const currentDay = getCurrentWeather();
const fiveDays = fiveDaysForecast();

store.dispatch(locationRequest);
// store.dispatch(currentDay);
store.dispatch(fiveDays);

// store.subscribe(()=> {

// })

console.log("store", store);

export default store;
