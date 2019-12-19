import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Accordion } from "react-bootstrap";

const FilterCard = props => {
  const { title, attributes, onFilterChange, selectedFilter } = props;

  return (
    <div style={{ border: "1px solid black" }}>
      <h6>{title}</h6>
      <hr />
      {attributes.map(attr => (
        <form>
          <input id={attr} type="checkbox" checked={selectedFilter[title].includes(attr)} onChange={() => onFilterChange(title, attr)} />
          <label htmlFor={attr}>{attr}</label>
        </form>
      ))}
    </div>
  );
};

export default FilterCard;
