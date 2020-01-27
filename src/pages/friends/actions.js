export const ADD_FRIEND = "ADD_FRIEND";
export const GET_ALL_FRIENDS = "GET_ALL_FRIENDS";
export const GET_ALL_FRIENDS_SUCCESS = "GET_ALL_FRIENDS_SUCCESS";

export const addFriend = friend => ({
  type: ADD_FRIEND,
  friend
});

export const getAllFriends = () => ({
  type: GET_ALL_FRIENDS
});

export const getAllFriendsSuccess = friends => ({
  type: GET_ALL_FRIENDS_SUCCESS,
  friends
});
