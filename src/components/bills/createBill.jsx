import React, { useEffect, useState, useRef } from "react";
import Input from "../input";
import { filterInArrayOfObj, isEmpty } from "../../utils/index";
import Autocomplete from "../autocomplete";

const CreateBill = props => {
  const defaultFriendObj = {
    name: "",
    paid: ""
  };
  const [billName, setName] = useState("");
  const [billAmount, setAmount] = useState();
  const [personCount, setPersonCount] = useState(0);
  const [friendsInBill, addFriendsInBill] = useState([defaultFriendObj]);
  const [friendInputName, updateFriendInputName] = useState("");
  const [filteredArray, updateFilteredArray] = useState([]);
  const handleChange = (value, name) => {
    const inputName = name.split("_")[0];
    let friendsInBillToAdd, indexOfFriend;
    if (inputName === "friend" || inputName === "paid") {
      indexOfFriend = name.split("_")[1];
      if (inputName === "friend") {
        updateFriendInputName(name);
        updateFilteredArray(
          filterInArrayOfObj(value, props.friendsList, "name")
        );
        if (!value) {
          updateFilteredArray([]);
        }
      }
      friendsInBillToAdd = [...friendsInBill];
    }
    switch (inputName) {
      case "billName":
        setName(value);
        break;
      case "billAmount":
        setAmount(parseInt(value));
        break;
      case "personCount":
        if (!value || value < 0) {
          setPersonCount(0);
          break;
        }
        setPersonCount(parseInt(value));
        break;
      case "friend": {
        handleFriendChnage(value, name);
        break;
      }
      case "paid": {
        friendsInBillToAdd[indexOfFriend] = {
          ...friendsInBillToAdd[indexOfFriend],
          paid: parseInt(value)
        };
        addFriendsInBill(friendsInBillToAdd);
        break;
      }
    }
  };
  const handleFriendChnage = (value, name, id) => {
    const friendsInBillToAdd = [...friendsInBill];
    const indexOfFriend = name.split("_")[1];
    friendsInBillToAdd[indexOfFriend] = {
      ...friendsInBillToAdd[indexOfFriend],
      name: value,
      id
    };
    addFriendsInBill(friendsInBillToAdd);
  };
  const handleFriendSelect = (value, name, id) => {
    handleFriendChnage(value, name, id);
    updateFilteredArray([]);
  };
  const handleSubmit = () => {
    console.log(billName, billAmount);
    const bill = {
      billName,
      billAmount,
      personCount,
      friendsInBill,
      id: new Date().getTime()
    };
    props.addBill(bill);
    props.goToHome();
  };
  const currentList = [...friendsInBill];
  const length = friendsInBill.length;
  if (length < personCount) {
    currentList.push(...Array(personCount - length).fill(defaultFriendObj));
    addFriendsInBill(currentList);
  } else if (length > personCount) {
    currentList.splice(personCount - length);
    addFriendsInBill(currentList);
  }
  const range = [...Array(personCount).keys()];
  const handleFriendBlur = e => {
    updateFilteredArray([]);
    document.removeEventListener("click", handleFriendBlur);
  };
  const handleFriendFocus = e => {
    e.target.focus();
    document.addEventListener("click", handleFriendBlur);
  };
  return (
    <div>
      <Input
        label="Bill name"
        onChange={handleChange}
        value={billName}
        name="billName"
      />
      <div className="flex">
        <Input
          placeholder="Amount"
          onChange={handleChange}
          value={billAmount}
          name="billAmount"
          type="number"
          className="maxw-115"
          label="Bill details"
        />
        <Input
          placeholder="Person Count"
          onChange={handleChange}
          value={personCount || ""}
          name="personCount"
          type="number"
          className="maxw-85"
        />
      </div>
      {range.map((val, i) => {
        return (
          <div className="p-relative mt--15" key={i}>
            <Input
              label={`Friend ${i + 1}`}
              name={`friend_${i}`}
              onChange={handleChange}
              value={currentList[i].name}
              onFocus={handleFriendFocus}
            />
            {!isEmpty(filteredArray) && friendInputName === `friend_${i}` && (
              <div className="autocompleteDiv">
                <Autocomplete
                  inputName={friendInputName}
                  list={filteredArray}
                  onSelect={handleFriendSelect}
                />
              </div>
            )}
            <Input
              placeholder="Amount Paid"
              name={`paid_${i}`}
              onChange={handleChange}
              value={currentList[i].paid}
              className="maxw-115 p-absolute  b-20"
              type="number"
              label=" "
            />
          </div>
        );
      })}
      <button className="bg-primary hover-primary ml-80" onClick={handleSubmit}>
        Create Bill
      </button>
    </div>
  );
};

export default CreateBill;
