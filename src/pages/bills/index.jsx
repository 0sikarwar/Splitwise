import React from "react";
import { connect } from "react-redux";
import BillsComponent from "../../components/bills";
import { addBill } from "./actions";

const Bills = props => {
  const { addBill, addFriend } = props;
  return (
    <div>
      <BillsComponent addBill={addBill} />
    </div>
  );
};
const mapStateToProps = ({}) => {};
export default connect(mapStateToProps, {
  addBill
})(Bills);
