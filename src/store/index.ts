import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default function generateStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
