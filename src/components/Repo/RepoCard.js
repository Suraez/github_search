import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function RepoCard({ repo }) {
  return (
    <div className="container shadow p-3 mb-5">
      {/* 1st row  */}
      <div className="row">
        <div className="d-flex col-md-8 col-12">
          <h5>
            {repo.name} by {repo.owner.login}
          </h5>
        </div>
        <div className="col-md-4 d-flex col-12">
          {/* star starts here */}
          <div className="d-flex flex-column m-2">
            <FontAwesomeIcon icon={faStar} />
            <p>{repo.stars === undefined ? 0 : repo.stars}</p>
          </div>

          {/* watch starts here */}
          <div className="d-flex flex-column m-2">
            <FontAwesomeIcon icon={faEye} />
            <p>{repo.watchers}</p>
          </div>

          {/* fork starts here */}
          <div className="d-flex flex-column m-2">
            <FontAwesomeIcon icon={faCodeBranch} />
            <p>{repo.forks}</p>
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="row">
        <div className="col-md-8 col-12">
          <p> {repo.description}</p>
        </div>
        <div className="col-md-4 d-flex flex-column col-12">
          <p>Created At: {repo.created_at.slice(0, 10)}</p>
          <p>Last Updated: {repo.updated_at.slice(0, 10)}</p>
        </div>
      </div>
    </div>
  );
}
