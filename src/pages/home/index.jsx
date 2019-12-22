import React from "react";
import { connect } from "react-redux";
import Bills from "../../components/bills";
import { addFriend, addBill } from "./actions";

const Home = props => {
  const { addBill, addFriend } = props;
  return (
    <div>
      <Bills addBill={addBill} addFriend={addFriend} />
    </div>
  );
};
const mapStateToProps = ({}) => {};
export default connect(mapStateToProps, {
  addBill,
  addFriend
})(Home);
