import { useEffect } from "react";
import { path, isEmpty } from "./utils/index";
import { connect } from "react-redux";
import { getAllFriends } from "./pages/friends/actions";
import { getAllBills } from "./pages/bills/actions";
const App = props => {
  const { friends, bills } = props;
  useEffect(() => {
    if (isEmpty(friends)) {
      props.getAllFriends();
    }
    if (isEmpty(bills)) {
      props.getAllBills();
    }
  });
  return null;
};
const mapStateToProps = data => {
  return {
    friends: path(["friends", "friendsList"], data),
    bills: path(["bills", "billsList"], data)
  };
};
export default connect(mapStateToProps, {
  getAllFriends,
  getAllBills
})(App);
