import React from "react";
import { connect } from "react-redux";
import BillsComponent from "../../components/bills";
import { addBill } from "./actions";
import { path } from "../../utils/index";
import { Header } from "../../components/header";

const Bills = props => {
  const { addBill, addFriend, history } = props;
  const goToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Header history={history} />
      <BillsComponent
        addBill={addBill}
        friendsList={props.friends}
        goToHome={goToHome}
      />
    </div>
  );
};
const mapStateToProps = data => {
  return {
    friends: path(["friends", "friendsList"], data)
  };
};
export default connect(mapStateToProps, {
  addBill
})(Bills);
