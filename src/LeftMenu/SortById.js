 
import React, { useState } from "react";

const SortById = props => {
  const { searchResult, updateSearchResult } = props;
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortOrderChange = e => {
    const { value } = e.target;
    if (!value) {
      return;
    }
    setSortOrder(value);
    const sortedResult = searchResult.sort((a, b) => a.id - b.id);
    if (value === "desc") {
      sortedResult.reverse();
    }
    updateSearchResult(sortedResult);
  };

  return (
    <form>
      <label htmlFor="sort-by-id">Sort by id</label>
      <select onChange={handleSortOrderChange} value={sortOrder} id="sort-by-id">
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </form>
  );
};

export default SortById;

