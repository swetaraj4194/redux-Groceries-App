// src/store/index.js
import { combineReducers, createStore } from "redux";
// import balanceReducer from "./balance/reducer";
import groceriesReducer from "./groceries/reducer";
import userReducer from "./user/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    // balance: balanceReducer,
    groceries: groceriesReducer,
    user: userReducer,
  }),
  enhancer
);

export default store;
