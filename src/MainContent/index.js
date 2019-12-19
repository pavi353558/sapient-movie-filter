import React from "react";
import Sort from "./Sort";
import SearchResult from "./SearchResult";
import { Col, Row } from 'react-bootstrap';
const MainContent = props => {
  const { searchResult } = props;

  return (
    // <div style={{ width: "60vh" }}>
    <Col xs={12} md={10}>
        <Sort />
        {/* <Row> */}
        <SearchResult searchResult={searchResult} />
        {/* </Row> */}
    </Col>
    // </div>
  );
};

export default MainContent;
