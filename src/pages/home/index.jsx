import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HomeComponent from "../../components/home";
import { getAllFriends, addFriend } from "../friends/actions";
import { path, isEmpty } from "../../utils/index";
const Home = props => {
  const { friends, addFriend } = props;
  return (
    <div>
      <button>
        <Link to="/bills">Add Bill</Link>
      </button>
      <button>
        <Link to="/friends">Add friends</Link>
      </button>
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
