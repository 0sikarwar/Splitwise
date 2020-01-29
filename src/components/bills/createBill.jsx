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
      debugger;
      indexOfFriend = name.split("_")[1];
      if (inputName === "friend") {
        updateFriendInputName(name);
        updateFilteredArray(
          filterInArrayOfObj(value, props.friendsList, "name")
        );
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
    debugger;
    const friendsInBillToAdd = [...friendsInBill];
    const indexOfFriend = name.split("_")[1];
    friendsInBillToAdd[indexOfFriend] = {
      ...friendsInBillToAdd[indexOfFriend],
      name: value,
      id
    };
    addFriendsInBill(friendsInBillToAdd);
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
  return (
    <div>
      <Input
        label="billName"
        onChange={handleChange}
        value={billName}
        name="billName"
      />
      <Input
        placeholder="amount"
        onChange={handleChange}
        value={billAmount}
        name="billAmount"
        type="number"
      />
      <Input
        placeholder="Person Count"
        onChange={handleChange}
        value={personCount || ""}
        name="personCount"
        type="number"
      />
      <button onClick={handleSubmit}>Create Bill</button>
      {range.map((val, i) => {
        return (
          <div key={i}>
            <Input
              label={`Friend ${i + 1}`}
              name={`friend_${i}`}
              onChange={handleChange}
              value={currentList[i].name}
            />
            <Input
              placeholder="Amount Paid"
              name={`paid_${i}`}
              onChange={handleChange}
              value={currentList[i].paid}
              type="number"
            />
          </div>
        );
      })}
      {!isEmpty(filteredArray) && (
        <Autocomplete
          inputName={friendInputName}
          list={filteredArray}
          onSelect={handleFriendChnage}
        />
      )}
    </div>
  );
};

export default CreateBill;
