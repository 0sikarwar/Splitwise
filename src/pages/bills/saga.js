import { takeEvery, all } from "redux-saga/effects";

import sagasManager from "../../utils/sagasManager";
import { ADD_BILL } from "./actions";
import { getFromLocalStore, addToLocalStore } from "../../utils";

function* addBill(action) {
  const bills = getFromLocalStore("bills") || [];
  const friends = getFromLocalStore("friends") || [];
  const { bill } = action;
  const { friendsInBill, billAmount, personCount } = bill;
  const amountPerHead = Math.round(billAmount / (personCount + 1));
  const updatedFriends = friends.map((friend, index) => {
    const friendInBill = friendsInBill.find(obj => obj.id === friend.id);
    if (friendInBill) {
      friend.owe = amountPerHead - friendInBill.paid + (friend.owe || 0);
    }
    return friend;
  });
  debugger;
  if (addToLocalStore("friends", updatedFriends)) {
    console.log("FRIENDS UPDATED");
  } else {
    console.log("FRIENDS UPDATE FAILED");
  }
  bills.push(bill);
  if (addToLocalStore("bills", bills)) {
    console.log("ADDED");
  } else {
    console.log("FAILED");
  }
}

sagasManager.addSagaToRoot(function* recentlyViewedHotelsWatcher() {
  yield all([takeEvery(ADD_BILL, addBill)]);
});
