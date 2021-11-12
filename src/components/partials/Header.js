import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 col-12">
          <h4>GitHub Search</h4>
        </div>
        <div className="col-md-8 col-12">
          <SearchBar firstPage={false} />
        </div>
        <div className="col-12">
          <h5>Showing Results For "Repo Name"</h5>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
    </div>
  );
}
