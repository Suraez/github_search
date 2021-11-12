import React from "react";
import { NavLink } from "react-router-dom";

export default function SingleRepoDetails() {
  return (
    <div className="container mt-4">
      {/* 1st row */}

      <div className="row">
        <div className="col-md-4 col-12">
          {" "}
          <p> OWNER NAME GOES HERE</p>
        </div>
        <div className="col-md-8 col-12 d-flex justify-content-end">
          {" "}
          <p> by REPOSITORY NAME GOES HERE</p>
        </div>
        <hr />
      </div>

      {/* 2nd row */}
      <div className="row">
        <div className="col-12">
          <h3>README.MD</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            voluptas iure quae suscipit voluptate quaerat magni inventore
            placeat enim! Ipsum suscipit laboriosam beatae unde quod eligendi et
            libero natus obcaecati.
          </p>
        </div>
        <hr />
      </div>

      {/* 3rd row */}
      <div className="row d-flex">
        <div className="col-md-12 col-12 justify-content-center">
          <p>Default Branch: BRANCH-NAME</p>
          <p>Number Of open issues: ISSUES-COUNT</p>
        </div>
        <NavLink to="/">Go Back</NavLink>
      </div>
    </div>
  );
}
