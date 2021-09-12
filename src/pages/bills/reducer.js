import { ADD_BILL, GET_ALL_BILL_SUCCESS } from "./actions";

export default function reducer(
  state = {
    billsList: []
  },
  action
) {
  switch (action.type) {
    case ADD_BILL:
      return {
        ...state,
        billsList: [...state.billsList, action.bill]
      };
    case GET_ALL_BILL_SUCCESS:
      return {
        ...state,
        billsList: action.bills
      };
    default:
      return state;
  }
}
