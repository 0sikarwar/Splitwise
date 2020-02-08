import React, { useState } from "react";
import CreateBill from "./createBill";

const Bills = props => {
  return (
    <div>
      <CreateBill
        addBill={props.addBill}
        friendsList={props.friendsList}
        goToHome={props.goToHome}
      />
    </div>
  );
};

export default Bills;
