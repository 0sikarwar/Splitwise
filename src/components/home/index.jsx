import React, { useEffect } from "react";
const Home = props => {
  const { friends } = props;

  return (
    <div>
      {friends.map((friend, index) => {
        return (
          <li key={index}>
            <span>Name: </span>
            <span>{friend.name}</span>
          </li>
        );
      })}
    </div>
  );
};
export default Home;
