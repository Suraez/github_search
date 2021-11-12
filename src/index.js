import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SearchResults from "./components/SearchResults";
import SingleRepoDetails from "./components/Repo/SingleRepoDetails";

import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search-results" element={<SearchResults />} />
      <Route path="single-repo" element={<SingleRepoDetails />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
