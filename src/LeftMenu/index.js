import React from "react";
// import { filtersList } from "./content";
import FilterCard from "./FilterCard";
import { Col } from 'react-bootstrap';
const LeftMenu = props => {
  const { onFilterChange, filtersList, selectedFilter } = props;
  console.log(filtersList, "props****")
  return (
    // <div style={{ width: "30vw" }}>
    <Col xs={12} md={2}>
      <h5>Filters:</h5>
      {Object.entries(filtersList).map(([key, value]) => (
        <FilterCard
          title={key}
          attributes={value}
          onFilterChange={onFilterChange}
          selectedFilter={selectedFilter}
        />      
      ))}
    </Col>
  );
};

export default LeftMenu;
