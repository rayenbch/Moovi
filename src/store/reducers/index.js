import authReducer from "./authReducer";
import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});
