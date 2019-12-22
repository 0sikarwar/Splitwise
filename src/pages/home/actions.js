export const ADD_BILL = "ADD_BILL";
export const ADD_FRIEND = "ADD_FRIEND";

export const addBill = bill => ({
  type: ADD_BILL,
  bill
});

export const addFriend = friend => ({
  type: ADD_FRIEND,
  friend
});
