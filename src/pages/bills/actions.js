export const ADD_BILL = "ADD_BILL";
export const GET_ALL_BILL = "GET_ALL_BILL";
export const GET_ALL_BILL_SUCCESS = "GET_ALL_BILL_SUCCESS";

export const addBill = bill => ({
  type: ADD_BILL,
  bill
});
export const getAllBills = () => ({
  type: GET_ALL_BILL
});

export const getAllBillSuccess = bills => ({
  type: GET_ALL_BILL_SUCCESS,
  bills
});
