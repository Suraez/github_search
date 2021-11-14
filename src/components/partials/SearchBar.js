import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router";

export default function SearchBar(props) {
  const style = props.firstPage ? "d-flex justify-content-center" : "d-flex";
  const style2 = props.firstPage ? "" : "d-flex";
  const style3 = props.firstPage ? "mb-3" : "mr-3";

  const [queryString, setqueryString] = useState("");
  const [repoList, setrepoList] = useState([]);

  const onSubmitHandler = (e, query) => {
    e.preventDefault();
    axios
      .get(
        "https://githubsearchbysuraj.herokuapp.com/search/repositories?q=" +
          query
      )
      .then((response) => {
        console.log(response.data);
        setrepoList(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {repoList.length !== 0 ? <Navigate to="/search-results" /> : null}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              className={style2}
              onSubmit={(e) => onSubmitHandler(e, queryString)}
            >
              <Form.Group className={style3} controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter the name of repo"
                  onChange={(e) => setqueryString(e.target.value)}
                />
              </Form.Group>

              <div className={style}>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
