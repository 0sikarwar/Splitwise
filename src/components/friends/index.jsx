import React, { useState } from "react";
import CreateFriend from "./createFriend";

const Friend = props => {
  const { addFriend, goToHome } = props;
  return (
    <div>
      <CreateFriend addFriend={addFriend} goToHome={goToHome} />
    </div>
  );
};

export default Friend;
