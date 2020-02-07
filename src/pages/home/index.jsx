import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HomeComponent from "../../components/home";
import { getAllFriends, addFriend } from "../friends/actions";
import { path, isEmpty } from "../../utils/index";
import { Header } from "../../components/header";
const Home = props => {
  const { friends, addFriend } = props;
  return (
    <div>
      <Header activeLink={"home"} />
      <HomeComponent friends={friends || []} addFriend={addFriend} />
    </div>
  );
};
const mapStateToProps = data => {
  return {
    friends: path(["friends", "friendsList"], data)
  };
};
export default connect(mapStateToProps, {
  getAllFriends,
  addFriend
})(Home);
