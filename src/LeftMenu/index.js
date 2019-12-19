import React from "react";
import FilterCard from "./FilterCard";
import { Col } from 'react-bootstrap';
import SortById from "./SortById";
const LeftMenu = props => {
  const { onFilterChange, filtersList, selectedFilter, updateSearchResult, searchResult  } = props;
  return (
    // <div style={{ width: "30vw" }}>
    <Col xs={12} md={2}>
      <h5>Filters:</h5>
      <SortById updateSearchResult={updateSearchResult} searchResult={searchResult} />
     {Object.entries(filtersList).map(([key, value]) => (
                <FilterCard title={key} attributes={value} onFilterChange={onFilterChange} selectedFilter={selectedFilter} />     
      ))}
    </Col>
  );
};

export default LeftMenu;
