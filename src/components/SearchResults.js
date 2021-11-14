import React from "react";
import Header from "./partials/Header";

import { connect } from "react-redux";
import RepoCard from "./Repo/RepoCard";

function SearchResults(props) {
  const slicedRepos = props.repoList.slice(0, 2);
  return (
    <>
      <Header />
      {slicedRepos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    repoList: state.repos.repoList,
  };
};

export default connect(mapStateToProps)(SearchResults);
