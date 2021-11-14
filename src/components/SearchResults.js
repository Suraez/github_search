import React, { useState } from "react";
import Header from "./partials/Header";

import { connect } from "react-redux";
import RepoCard from "./Repo/RepoCard";
import RepoPagination from "./partials/RepoPagination";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
// importing actions
import { searchRepos } from "../store/actions";
import "../assets/styles/pagination.css";

function SearchResults(props) {
  // eslint-disable-next-line
  const [questionPerPage, setQuestionPerPage] = useState(5);
  const [page, setPage] = useState(1);

  // for updating repo Nmae

  const [updatedQuery, setupdatedQuery] = useState(props.repoName);

  const paginate = (page) => {
    setPage(page);
  };
  let slicedRepos;
  let hasNextPage;
  if (props.repoList) {
    const updatedQuestionsArr = [...props.repoList];
    const indexOfLastQuestion = page * questionPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionPerPage;
    slicedRepos = updatedQuestionsArr.slice(
      indexOfFirstQuestion,
      indexOfLastQuestion
    );
    hasNextPage =
      !(
        props.repoList.length >= indexOfFirstQuestion &&
        props.repoList.length <= indexOfLastQuestion
      ) && indexOfFirstQuestion < props.repoList.length;
  }

  // for getting search of new updated repos
  const onSubmitHandler = (e, query) => {
    e.preventDefault();
    axios
      .get(
        "https://githubsearchbysuraj.herokuapp.com/search/repositories?q=" +
          query
      )
      .then((response) => {
        console.log("results have been fetched");
        // console.log(response.data.data.items.length);
        props.onSearchRepos(response.data.data.items, updatedQuery);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 col-12">
          <h4>GitHub Search</h4>
        </div>
        <div className="col-md-8 col-12">
          <Form
            onSubmit={(e) => onSubmitHandler(e, updatedQuery)}
            className="d-flex"
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter the name of repo"
                value={updatedQuery}
                onChange={(e) => setupdatedQuery(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex">
              <Button variant="primary" type="submit">
                Search
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-12">
          <hr />
        </div>
        <div className="col-12">
          <Header
            noOfRepos={questionPerPage}
            totalRepos={props.repoList.length}
            currentPage={page}
          />
        </div>
      </div>
      {slicedRepos &&
        slicedRepos.map((repo) => (
          <NavLink
            to={{
              pathname: "/single-repo",
            }}
            state={{
              url: repo.url,
            }}
            key={repo.id}
          >
            <RepoCard repo={repo} />
          </NavLink>
        ))}

      {/* pagination starts here */}
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <RepoPagination
              paginate={paginate}
              page={page}
              hasNextPage={hasNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    repoList: state.repos.repoList,
    repoName: state.repos.repoName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchRepos: (repos, queryString) =>
      dispatch(searchRepos(repos, queryString)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);