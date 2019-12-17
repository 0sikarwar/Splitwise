import { combineReducers } from "redux";
import testReducer from "./../containers/reducer.js";
const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
