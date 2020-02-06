import React, { useState, useEffect } from "react";
import Input from "../input";
import { isValidEmail } from "../../utils";
const CreateFreind = props => {
  const { friendToAdd } = props;
  const { name: existingName } = friendToAdd || {};
  const [name, setName] = useState(existingName || "");
  const [email, setEmail] = useState("");
  const handleChange = (value, name) => {
    if ("friendName" === name) {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const id = (friendToAdd || {}).id || new Date().getTime();
    const owe = owe || 0;
    props.addFriend({
      name,
      email,
      id,
      owe: (friendToAdd || {}).owe || 0,
      temp: false
    });
    console.log(name, email);
  };
  return (
    <div>
      <Input
        placeholder="Name"
        value={name}
        label="Name"
        onChange={handleChange}
        name={"friendName"}
      />
      <Input
        placeholder="Email Id"
        value={email}
        label="Email"
        onChange={handleChange}
        name={"email"}
      />
      <button onClick={handleSubmit}>Add Friend</button>
    </div>
  );
};

export default CreateFreind;
