import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/indexReducers";
import {
  getLocationRequest,
  fiveDaysForecast,
  getCurrentWeather,
} from "../actions/indexActions";
// import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const data = getLocationRequest();
const currentDay = getCurrentWeather();
const fiveDays = fiveDaysForecast();

store.dispatch(data);
store.dispatch(currentDay);
store.dispatch(fiveDays);

// store.subscribe(()=> {

// })

console.log("store", store);

export default store;
