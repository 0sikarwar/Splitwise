import React, { useState } from "react";
import CreateBill from "./createBill";

const Bills = props => {
  return (
    <div>
      <CreateBill addBill={props.addBill} friendsList={props.friendsList} />
    </div>
  );
};

export default Bills;