import React, { useEffect } from "react";
const Home = props => {
  const { friends } = props;

  return (
    <div>
      {friends.map((friend, index) => {
        return (
          <li key={index}>
            <span className="pr-5">Name: </span>
            <span className="pr-5">{friend.name}</span>
            <span className="pr-5 pl-5">owes:</span>
            <span>{friend.owe || 0}</span>
          </li>
        );
      })}
    </div>
  );
};
export default Home;
