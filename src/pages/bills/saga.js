import { takeEvery, all, put } from "redux-saga/effects";

import sagasManager from "../../utils/sagasManager";
import { ADD_BILL, getAllBillSuccess, GET_ALL_BILL } from "./actions";
import { getFromLocalStore, addToLocalStore, isEmpty } from "../../utils";
import { addFriendSuccess } from "../friends/actions";

function* addBill(action) {
  const bills = getFromLocalStore("bills") || [];
  const friends = getFromLocalStore("friends") || [];
  const { bill } = action;
  const { friendsInBill, billAmount, personCount } = bill;
  const amountPerHead = Math.round(billAmount / (personCount + 1));
  const updatedFriends = friends.map((friend, index) => {
    const friendInBillIndex = friendsInBill.findIndex(
      obj => obj.id === friend.id
    );
    if (friendInBillIndex > -1) {
      friend.owe =
        amountPerHead -
        friendsInBill[friendInBillIndex].paid +
        (friend.owe || 0);
      friendsInBill[friendInBillIndex].isExisting = true;
    }
    return friend;
  });
  friendsInBill.forEach((friend, index) => {
    if (!friendsInBill[index].isExisting) {
      friend.id = new Date().getTime() + index;
      updatedFriends.push({
        name: friend.name,
        owe: amountPerHead - friend.paid,
        id: friend.id,
        temp: true
      });
    }
  });
  if (addToLocalStore("friends", updatedFriends)) {
    yield put(addFriendSuccess(updatedFriends));
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

function* getAllBills() {
  const bills = getFromLocalStore("bills") || [];
  if (!isEmpty(bills)) {
    yield put(getAllBillSuccess(bills));
  } else {
    console.log("bills not found");
  }
}

sagasManager.addSagaToRoot(function* recentlyViewedHotelsWatcher() {
  yield all([takeEvery(ADD_BILL, addBill)]);
  yield all([takeEvery(GET_ALL_BILL, getAllBills)]);
});
