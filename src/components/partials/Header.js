import React from "react";
import { connect } from "react-redux";

function Header(props) {
  console.log(props.repoName);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h4>GitHub Search</h4>
        </div>
        <div className="col-12">
          <h5>Showing Results For {props.repoName}</h5>
          <h6>
            Showing Results {props.noOfRepos} of {props.totalRepos}
          </h6>
          <p>Page {props.currentPage}</p>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    repoName: state.repos.repoName,
  };
};

export default connect(mapStateToProps)(Header);