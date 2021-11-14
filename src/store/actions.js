import * as ACTIONS from "./actionTypes";

export const searchRepos = (repos, queryString) => {
  return {
    type: ACTIONS.SEARCH_REPOS_SUCCESS,
    payload: {
      repos,
      queryString,
    },
  };
};

export const fetchSingleRepoStart = () => {
  return {
    type: ACTIONS.FETCH_SINGLE_REPO_START,
    payload: {
      loading: true,
    },
  };
};

export const fetchSingleRepoSuccess = (singleRepo) => {
  return {
    type: ACTIONS.FETCH_SINGLE_REPO_SUCCESS,
    payload: {
      loading: false,
      singleRepo,
    },
  };
};