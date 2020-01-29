import React from "react";
import { connect } from "react-redux";
import BillsComponent from "../../components/bills";
import { addBill } from "./actions";
import { path } from "../../utils/index";

const Bills = props => {
  const { addBill, addFriend } = props;
  return (
    <div>
      <BillsComponent addBill={addBill} friendsList={props.friends} />
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
