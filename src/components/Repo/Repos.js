import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function Repos() {
  return (
    <div className="container shadow p-3 mb-5">
      {/* 1st row  */}
      <div className="row">
        <div className="d-flex col-md-8 col-12">
          <h5>Repo Name by Author Name</h5>
        </div>
        <div className="col-md-4 d-flex col-12">
          {/* star starts here */}
          <div className="d-flex flex-column m-2">
            <FontAwesomeIcon icon={faStar} />
            <p>0</p>
          </div>

          {/* watch starts here */}
          <div className="d-flex flex-column m-2">
            <FontAwesomeIcon icon={faEye} />
            <p>10</p>
          </div>

          {/* fork starts here */}
          <div className="d-flex flex-column m-2">
            <FontAwesomeIcon icon={faCodeBranch} />
            <p>10</p>
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        <div className="col-md-8 col-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          dolores quisquam quis velit, eaque libero! Modi eos illo ....
        </div>
        <div className="col-md-4 d-flex flex-column col-12">
          <p>Created At: 2021-09-01</p>
          <p>Last Updated: 2021-09-01</p>
        </div>
      </div>
    </div>
  );
}
