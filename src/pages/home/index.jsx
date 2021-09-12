import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HomeComponent from "../../components/home";
import { getAllFriends, addFriend } from "../friends/actions";
import { path, isEmpty } from "../../utils/index";
import { Header } from "../../components/header";
const Home = props => {
  const { friends, addFriend, history, bills } = props;
  const friendBillNameMap = {};
  bills.forEach(bill => {
    bill.friendsInBill &&
      bill.friendsInBill.forEach(frnd => {
        friendBillNameMap[frnd.id] = friendBillNameMap[frnd.id] || [];
        friendBillNameMap[frnd.id].push(bill.billName);
      });
  });
  return (
    <div>
      <Header history={history} />
      <HomeComponent
        friends={friends || []}
        addFriend={addFriend}
        friendBillNameMap={friendBillNameMap || {}}
      />
    </div>
  );
};
const mapStateToProps = data => {
  return {
    friends: path(["friends", "friendsList"], data),
    bills: path(["bills", "billsList"], data)
  };
};
export default connect(mapStateToProps, {
  getAllFriends,
  addFriend
})(Home);
