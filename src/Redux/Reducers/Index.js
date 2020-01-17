import { combineReducers } from "redux";
import posts from "./PostReducer";
import apiCallsInProgress from "./ApiStatusReducer";

const rootReducer = combineReducers({
  posts,
  apiCallsInProgress
});

export default rootReducer;
