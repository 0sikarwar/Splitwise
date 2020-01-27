import { takeEvery, all, put } from "redux-saga/effects";

import sagasManager from "../../utils/sagasManager";
import { ADD_FRIEND, GET_ALL_FRIENDS, getAllFriendsSuccess } from "./actions";
import { getFromLocalStore, addToLocalStore, isEmpty } from "../../utils";

function* addFriend(action) {
  const friends = getFromLocalStore("friends") || [];
  friends.push(action.friend);
  if (addToLocalStore("friends", friends)) {
    console.log("ADDED");
  } else {
    console.log("FAILED");
  }
}

function* getAllFriends() {
  const friends = getFromLocalStore("friends") || [];
  debugger;
  if (!isEmpty(friends)) {
    yield put(getAllFriendsSuccess(friends));
  } else {
    console.log("Friends not found");
  }
}

sagasManager.addSagaToRoot(function* recentlyViewedHotelsWatcher() {
  yield all([
    takeEvery(ADD_FRIEND, addFriend),
    takeEvery(GET_ALL_FRIENDS, getAllFriends)
  ]);
});
