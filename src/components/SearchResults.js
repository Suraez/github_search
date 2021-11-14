import React, { useState } from "react";
import Header from "./partials/Header";

import { connect } from "react-redux";
import RepoCard from "./Repo/RepoCard";
import RepoPagination from "./partials/RepoPagination";

import "../assets/styles/pagination.css";

function SearchResults(props) {
  // eslint-disable-next-line
  const [questionPerPage, setQuestionPerPage] = useState(5);
  const [page, setPage] = useState(1);

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
  return (
    <>
      <Header
        noOfRepos={questionPerPage}
        totalRepos={props.repoList.length}
        currentPage={page}
      />
      {slicedRepos &&
        slicedRepos.map((repo) => <RepoCard repo={repo} key={repo.id} />)}

      {/* pagination starts here */}
      <div className={`container`}>
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    repoList: state.repos.repoList,
  };
};

export default connect(mapStateToProps)(SearchResults);
