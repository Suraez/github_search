import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SearchResults from "./components/SearchResults";

import "bootstrap/dist/css/bootstrap.css";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search-results" element={<SearchResults />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
