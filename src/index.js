import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SearchResults from "./components/SearchResults";
import SingleRepoDetails from "./components/Repo/SingleRepoDetails";
import repoReducer from "./store/reducers";

// redux thing
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

const reducer = combineReducers({
  repos: repoReducer,
});

const store = createStore(reducer);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="search-results" element={<SearchResults />} />
        <Route path="single-repo" element={<SingleRepoDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
