import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = props => {
  return (
    <div>
      <button>
        <Link to="/bills">Add Bill</Link>
      </button>
      <button>
        <Link to="/friends">Add friends</Link>
      </button>
    </div>
  );
};
const mapStateToProps = ({}) => {};
export default connect(mapStateToProps, {})(Home);
