import React from "react";
import { connect } from "react-redux";
import FriendsComponent from "../../components/friends";
import { addFriend } from "./actions";
import { Header } from "../../components/header";

const Friends = props => {
  const { addFriend } = props;
  return (
    <div>
      <Header activeLink={"friends"} />
      <FriendsComponent addFriend={addFriend} />
    </div>
  );
};
const mapStateToProps = ({}) => {};
export default connect(mapStateToProps, {
  addFriend
})(Friends);
