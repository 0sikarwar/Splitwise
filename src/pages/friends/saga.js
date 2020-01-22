import { takeEvery, all } from "redux-saga/effects";

import sagasManager from "../../utils/sagasManager";
import { ADD_FRIEND } from "./actions";
import { getFromLocalStore, addToLocalStore } from "../../utils";

function* addFriend(action) {
  debugger;

  const friends = getFromLocalStore("friends") || [];
  friends.push(action.friend);
  if (addToLocalStore("friends", friends)) {
    console.log("ADDED");
  } else {
    console.log("FAILED");
  }
}

sagasManager.addSagaToRoot(function* recentlyViewedHotelsWatcher() {
  yield all([takeEvery(ADD_FRIEND, addFriend)]);
});
