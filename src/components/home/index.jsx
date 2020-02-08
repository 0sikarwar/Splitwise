import React, { useEffect, useState } from "react";
import Overlay from "../Overlay";
import Modal from "../Modal";
import CreateFriend from "../friends/createFriend";
const Home = props => {
  const [showAddFriendModal, toggleShowAddFriendModal] = useState(false);
  const [friendToAdd, setFriendToAdd] = useState({});
  const { friends, addFriend } = props;
  const handleTempFriendClick = friend => {
    toggleShowAddFriendModal(!showAddFriendModal);
    setFriendToAdd(friend);
  };
  const handleAddFriend = friend => {
    toggleShowAddFriendModal(!showAddFriendModal);
    addFriend(friend);
  };
  const hideModal = () => {
    toggleShowAddFriendModal(false);
  };
  let totalOwesYouAmt = 0,
    totalYouOweAmt = 0;
  return (
    <>
      <div>
        <ul className="list">
          {friends.map((friend, index) => {
            let divClass, oweText;
            if (friend.owe >= 0) {
              divClass = "t-green";
              oweText = "Owes you";
              totalOwesYouAmt += Math.abs(friend.owe);
            } else {
              divClass = "t-red";
              oweText = "You owe";
              totalYouOweAmt += Math.abs(friend.owe);
            }
            return (
              <li key={index} className="listItem">
                <span>{friend.name}</span>
                <div className={`flex ${divClass}`}>
                  <span>{oweText}</span>
                  <span>{Math.abs(friend.owe) || 0}</span>
                </div>
                {friend.temp && (
                  <button
                    className="p-absolute r-70"
                    onClick={() => {
                      handleTempFriendClick(friend);
                    }}
                  >
                    Add
                  </button>
                )}
              </li>
            );
          })}
          <li>
            <span className="w-240">Total amount you will get </span>
            <span className="t-green">{totalOwesYouAmt}</span>
          </li>
          <li>
            <span className="w-240">Total amount you need to give </span>
            <span className="t-red">{totalYouOweAmt}</span>
          </li>
        </ul>
      </div>
      {showAddFriendModal && (
        <Overlay>
          <Modal type="renderProp">
            <CreateFriend
              friendToAdd={friendToAdd}
              addFriend={handleAddFriend}
              handleCancel={hideModal}
            />
          </Modal>
        </Overlay>
      )}
    </>
  );
};
export default Home;
