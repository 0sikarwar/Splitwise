import { useEffect } from "react";
import { path, isEmpty } from "./utils/index";
import { connect } from "react-redux";
import { getAllFriends } from "./pages/friends/actions";
const App = props => {
  const { friends } = props;
  useEffect(() => {
    if (isEmpty(friends)) {
      props.getAllFriends();
    }
  });
  return null;
};
const mapStateToProps = data => {
  debugger;
  return {
    friends: path(["friends", "friendsList"], data)
  };
};
export default connect(mapStateToProps, {
  getAllFriends
})(App);
