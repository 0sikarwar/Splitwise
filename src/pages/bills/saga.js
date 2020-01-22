import { takeEvery, all } from "redux-saga/effects";

import sagasManager from "../../utils/sagasManager";
import { ADD_BILL } from "./actions";
import { getFromLocalStore, addToLocalStore } from "../../utils";

function* addBill(action) {
  const bills = getFromLocalStore("bills") || [];
  bills.push(action.bill);
  if (addToLocalStore("bills", bills)) {
    console.log("ADDED");
  } else {
    console.log("FAILED");
  }
}

sagasManager.addSagaToRoot(function* recentlyViewedHotelsWatcher() {
  yield all([takeEvery(ADD_BILL, addBill)]);
});
