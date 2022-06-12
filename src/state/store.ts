import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const middlewares = [thunk];

export const store = legacy_createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);
