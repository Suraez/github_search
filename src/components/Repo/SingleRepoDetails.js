import axios from "axios";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  fetchSingleRepoStart,
  fetchSingleRepoSuccess,
} from "../../store/actions";

import { connect } from "react-redux";

function SingleRepoDetails(props) {
  const location = useLocation();
  console.log(location.state.url);

  useEffect(() => {
    props.onFetchSingleRepoStart();
    console.log("fetching started");

    const url =
      "https://githubsearchbysuraj.herokuapp.com/single-repo?url=" +
      location.state.url;
    axios.get(url).then((response) => {
      console.log("fetching ended!");
      props.onFetchSingleRepoSuccess(response.data.data);
      console.log(response.data.data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mt-4">
      {/* 1st row */}
      {props.singleRepo === null ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <p>
                {" "}
                {props.singleRepo.name}by {props.singleRepo.owner.login}
              </p>
            </div>
            <hr />
          </div>

          {/* 2nd row */}
          <div className="row">
            <div className="col-12">
              <h3>README.MD</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique voluptas iure quae suscipit voluptate quaerat magni
                inventore placeat enim! Ipsum suscipit laboriosam beatae unde
                quod eligendi et libero natus obcaecati.
              </p>
            </div>
            <hr />
          </div>

          {/* 3rd row */}
          <div className="row d-flex">
            <div className="col-md-12 col-12 justify-content-center">
              <p>Default Branch: {props.singleRepo.default_branch}</p>
              <p>Number Of open issues: {props.singleRepo.open_issues}</p>
            </div>
            <NavLink to="/search-results">Go Back</NavLink>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    singleRepo: state.repos.singleRepo,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    onFetchSingleRepoStart: () => dispatch(fetchSingleRepoStart()),
    onFetchSingleRepoSuccess: (singleRepo) =>
      dispatch(fetchSingleRepoSuccess(singleRepo)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(SingleRepoDetails);
