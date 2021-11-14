import * as ACTIONS from "./actionTypes";

const initialState = {
  repoList: [],
  hasSearchResults: false,
  repoName: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH_REPOS_SUCCESS:
      return {
        ...state,
        repoList: action.payload.repos,
        hasSearchResults: true,
        repoName: action.payload.queryString,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
