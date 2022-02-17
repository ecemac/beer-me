import { combineReducers } from "redux";
import randomBeersReducer from "./randomBeersReducer";
import searchBeersReducer from "./searchBeersReducer";

const rootReducer = combineReducers({
  randomBeer: randomBeersReducer,
  searchBeer: searchBeersReducer,
});

export default rootReducer;
