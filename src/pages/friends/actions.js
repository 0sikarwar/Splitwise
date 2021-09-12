export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";
export const GET_ALL_FRIENDS = "GET_ALL_FRIENDS";
export const GET_ALL_FRIENDS_SUCCESS = "GET_ALL_FRIENDS_SUCCESS";

export const addFriend = friend => ({
  type: ADD_FRIEND,
  friend
});

export const addFriendSuccess = friends => ({
  type: ADD_FRIEND_SUCCESS,
  friends
});

export const addFriendFailure = err => ({
  type: ADD_FRIEND_FAILURE,
  err
});

export const getAllFriends = () => ({
  type: GET_ALL_FRIENDS
});

export const getAllFriendsSuccess = friends => ({
  type: GET_ALL_FRIENDS_SUCCESS,
  friends
});
