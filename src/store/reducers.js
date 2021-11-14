import * as ACTIONS from "./actionTypes";

const initialState = {
  repoList: [],
  hasSearchResults: false,
  repoName: "",
  singleRepo: null,
  loading: false,
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

    case ACTIONS.FETCH_SINGLE_REPO_START:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case ACTIONS.FETCH_SINGLE_REPO_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        singleRepo: action.payload.singleRepo,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
