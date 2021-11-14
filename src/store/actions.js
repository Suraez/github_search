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
