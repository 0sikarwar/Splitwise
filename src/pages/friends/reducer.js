import { ADD_FRIEND, GET_ALL_FRIENDS_SUCCESS } from "./actions";

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
    case GET_ALL_FRIENDS_SUCCESS:
      return {
        ...state,
        friendsList: action.friends
      };
    default:
      return state;
  }
}
