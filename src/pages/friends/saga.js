import { takeEvery, all, put } from "redux-saga/effects";

import sagasManager from "../../utils/sagasManager";
import {
  ADD_FRIEND,
  GET_ALL_FRIENDS,
  getAllFriendsSuccess,
  addFriendSuccess,
  addFriendFailure
} from "./actions";
import { getFromLocalStore, addToLocalStore, isEmpty } from "../../utils";

function* addFriend(action) {
  const friends = getFromLocalStore("friends") || [];
  const { friend: friendToAdd } = action;
  const index = friends.findIndex(obj => obj.id === friendToAdd.id);
  const friendMatched = friends.find(
    obj =>
      (!obj.temp && obj.name === friendToAdd.name) ||
      obj.email === friendToAdd.email
  );
  let errMsg = ''
  if (friendMatched) {
    errMsg = "Name or Email Existing";
    yield put(addFriendFailure(errMsg));
  } else {
    index > -1 ? (friends[index] = friendToAdd) : friends.push(friendToAdd);
    if (addToLocalStore("friends", friends)) {
      yield put(addFriendSuccess(friends));
      console.log("ADDED");
    } else {
      yield put(addFriendFailure(errMsg));
      console.log("FAILED");
    }
  }
}

function* getAllFriends() {
  const friends = getFromLocalStore("friends") || [];
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
