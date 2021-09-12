import React from "react";
import { connect } from "react-redux";
import FriendsComponent from "../../components/friends";
import { addFriend } from "./actions";
import { Header } from "../../components/header";

const Friends = props => {
  const { addFriend, history } = props;
  const goToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Header history={history} />
      <FriendsComponent addFriend={addFriend} goToHome={goToHome} />
    </div>
  );
};
const mapStateToProps = ({}) => {};
export default connect(mapStateToProps, {
  addFriend
})(Friends);
