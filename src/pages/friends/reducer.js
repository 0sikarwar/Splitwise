import { ADD_FRIEND } from "./actions";

export default function reducer(
  state = {
    friendsList: []
  },
  action
) {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        friendsList: [...state.friendsList, action.friend]
      };
    default:
      return state;
  }
}
