import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchBar(props) {
  const style = props.firstPage ? "d-flex justify-content-center" : "d-flex";
  const style2 = props.firstPage ? "" : "d-flex";
  const style3 = props.firstPage ? "mb-3" : "mr-3";
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Form className={style2}>
            <Form.Group className={style3} controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter the name of repo" />
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
  );
}
