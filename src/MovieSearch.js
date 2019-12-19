import React, { useState, useEffect } from "react";
import { sortByAttributes } from "./utils/sort";
import LeftMenu from "./LeftMenu";
import MainContent from "./MainContent";
import { Row } from 'react-bootstrap';

const MovieSearch = props => {
  //   const [selectedFilter, setSelectedFilter] = useState();
  //   const [searchResult, setSearchResult] = useState([]);
  //   const [sortBy, setSortBy] = useState();

  const { selectedFilter, searchResult, sortBy, onFilterChange, filtersList, updateSearchResult } = props;

  return (
    <Row style={{margin:'10px'}}>
 <LeftMenu
        onFilterChange={onFilterChange}
        selectedFilter={selectedFilter}
        searchResult={searchResult}
        updateSearchResult={updateSearchResult}
        filtersList={filtersList}
      />      
      <MainContent searchResult={searchResult} />
    </Row>
  );
};

export default MovieSearch;
