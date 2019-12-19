import React, { Fragment } from "react";
import { Card, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const SearchResult = props => {
  const { searchResult } = props;
  return (
    <Fragment>
      <Row>
      {searchResult.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}

      </Row>
    </Fragment>
  );
};

export default SearchResult;
