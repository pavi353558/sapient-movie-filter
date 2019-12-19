import React, { Component } from "react";
import "./App.css";
import MovieSearch from "./MovieSearch";
import { sortByAttributes } from "./utils/sort";

class App extends Component {
  state = {
    selectedFilter: { species: [], gender: [], origin: [] },
    searchResult: [],
    sortBy: sortByAttributes.ASC,
    filtersList: { species: [], gender: [], origin: []}
  };

  // componentDidMount = () => {
  //   this.fetchMovies();
  // };
  componentDidMount = async () => {
    const searchResult = await this.fetchMovies();
    this.setState({ searchResult });
  };
  
  fetchMovies = async () => {
    let filtersList= { species: [], gender: [], origin: []};
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const responseJson = await response.json();
    responseJson["results"].forEach(data => {
      if(filtersList.species.indexOf(data["species"]) < 0) {
        filtersList.species.push(data["species"])
      }
      if(filtersList.gender.indexOf(data["gender"]) < 0) {
        filtersList.gender.push(data["gender"])
      }
      if(typeof data["origin"]["name"] == 'string') {
        let origin = data["origin"]["name"].split(" ")[0];
        if(filtersList.origin.indexOf(origin) < 0) {
          filtersList.origin.push(origin)
        }
      }
      
    })
    // this.setState({ searchResult: responseJson.results });
    this.setState({ filtersList });
    return responseJson.results;;
  };

  onFilterChange = async (title, attr) => {
    const selectedFilter = JSON.parse(JSON.stringify(this.state.selectedFilter));
    if (selectedFilter[title].includes(attr)) {
      const index = selectedFilter[title].findIndex(el => el === attr);
      selectedFilter[title].splice(index, 1);
    } else {
      selectedFilter[title].push(attr);
    }
    const searchResult = await this.fetchMovies();
    const someFilterSelcted = Object.values(selectedFilter).some(value => value.length > 0);

    if (!someFilterSelcted) {
      return this.setState({ selectedFilter, searchResult });
    }
    console.log("selectedfilter", selectedFilter)
    const filteredResult = searchResult.filter(item => {
      const hasSelectedSpecies = selectedFilter.species.includes(item.species);
      const hasSelectedGender = selectedFilter.gender.includes(item.gender);
      const hasSelectedOrigin = selectedFilter.origin.includes(item.origin.name);

      const includeElement = hasSelectedSpecies || hasSelectedGender || hasSelectedOrigin;

      return includeElement;
    });
    this.setState({ selectedFilter, searchResult: filteredResult });
  };

  render() {
    const { selectedFilter, searchResult, sortBy, filtersList } = this.state;
    return (
      <div className="App">
        <MovieSearch
          selectedFilter={selectedFilter}
          searchResult={searchResult}
          sortBy={sortBy}
          onFilterChange={this.onFilterChange}
          filtersList = {filtersList}
          updateSearchResult={value => this.setState({ searchResult: value })}
        />
      </div>
    );
  }
}

export default App;
