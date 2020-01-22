import React from "react";
import { connect } from "react-redux";
import FriendsComponent from "../../components/friends";
import { addFriend } from "./actions";

const Friends = props => {
  const { addFriend } = props;
  return (
    <div>
      <FriendsComponent addFriend={addFriend} />
    </div>
  );
};
const mapStateToProps = ({}) => {};
export default connect(mapStateToProps, {
  addFriend
})(Friends);
