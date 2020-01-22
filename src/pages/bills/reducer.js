import { ADD_BILL } from "./actions";

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
    default:
      return state;
  }
}
