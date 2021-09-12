import { takeEvery, all } from "redux-saga/effects";

import { TEST } from "./action";

import sagasManager from "./../utils/sagasManager";

function* test(action) {
  console.log("ACTION FIRED ", action.val);
}

sagasManager.addSagaToRoot(function* recentlyViewedHotelsWatcher() {
  yield all([takeEvery(TEST, test)]);
});
