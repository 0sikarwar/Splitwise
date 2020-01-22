import React, { useState } from "react";
import CreateFriend from "./createFriend";

const Friend = props => {
  const { addFriend } = props;
  return (
    <div>
      <CreateFriend addFriend={addFriend} />
    </div>
  );
};

export default Friend;
