import { combineReducers } from "redux";
import friendsReducer from "../pages/friends/reducer";
import billsReducer from "../pages/bills/reducer";
const rootReducer = combineReducers({
  friends: friendsReducer,
  bills: billsReducer
});

export default rootReducer;
