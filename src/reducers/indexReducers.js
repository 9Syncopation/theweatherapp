import { combineReducers } from "redux";
import locationsReducer from "./locationsReducer";
import favoriteReducer from "./favoriteReducer";
import { forecastReducer,
	//  dayForecastReducer 
	} from "./forecastReducer";

export default combineReducers({
  locations: locationsReducer,
  favorites: favoriteReducer,
  forecast: forecastReducer,
//   dayForecast: dayForecastReducer,
});
