import React, { useEffect, useState } from "react";
import Overlay from "../Overlay";
import Modal from "../Modal";
import CreateFriend from "../friends/createFriend";
const Home = props => {
  const [showAddFriendModal, toggleShowAddFriendModal] = useState(false);
  const [friendToAdd, setFriendToAdd] = useState({});
  const { friends } = props;
  const addFriend = friend => {
    toggleShowAddFriendModal(!showAddFriendModal);
    setFriendToAdd(friend);
  };
  return (
    <>
      <div>
        {friends.map((friend, index) => {
          return (
            <li key={index}>
              <span className="pr-5">Name: </span>
              <span className="pr-5">{friend.name}</span>
              <span className="pr-5 pl-5">owes:</span>
              <span>{friend.owe || 0}</span>
              {friend.temp && (
                <button
                  onClick={() => {
                    addFriend(friend);
                  }}
                >
                  Add
                </button>
              )}
            </li>
          );
        })}
      </div>
      {showAddFriendModal && (
        <Overlay>
          <Modal>
            <CreateFriend />
          </Modal>
        </Overlay>
      )}
    </>
  );
};
export default Home;
