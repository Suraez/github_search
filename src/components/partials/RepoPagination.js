import React from "react";
import { Pagination } from "react-bootstrap";

export default function RepoPagination(props) {
  function adjustPage(amount) {
    props.paginate(props.page + amount);
  }
  return (
    <Pagination>
      {props.page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {props.page !== 1 && (
        <Pagination.Item onClick={() => props.paginate(1)}>1</Pagination.Item>
      )}
      {props.page > 2 && <Pagination.Ellipsis />}
      {props.page > 2 && (
        <Pagination.Item onClick={() => adjustPage(-1)}>
          {props.page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{props.page}</Pagination.Item>
      {props.hasNextPage && (
        <Pagination.Item onClick={() => adjustPage(1)}>
          {props.page + 1}
        </Pagination.Item>
      )}
      {props.hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>
  );
}
