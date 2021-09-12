import {
  GET_ALL_FRIENDS_SUCCESS,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE
} from "./actions";

export default function reducer(
  state = {
    friendsList: []
  },
  action
) {
  switch (action.type) {
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friendsList: action.friends
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        addFriendErr: action.err
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
