import { useReducer, createContext } from "react";
import {
  filterRestaurantsFunc,
  searchNameOptions,
  cuisinesTotalSearchOptions,
  searchCuisinesOptions,
} from "../utils/filterReataurnats";

export const SearchContext = createContext({
  totalCuisinesSearchOptions: [],
  filteredRestaurants: [],
  searchOptions: [],
  searchBy: "",
  isSearchButtonClicked: false,
  totalRestaurants: [],
  setTotalRestaurants: () => {},
  setTotalCuisinesSearchOptions: () => {},
  setIsSearchButtonClicked: () => {},
  setSearchBy: (input) => {},
  setSearchOptions: (searchBy) => {},
  filterRestaurants: () => {},
});

const defaultSearchState = {
  filteredRestaurants: [],
  totalCuisinesSearchOptions: [],
  searchOptions: [],
  searchBy: "name",
  isSearchButtonClicked: false,
  totalRestaurants: [],
};

const searchReducer = (state, action) => {
  if (action.type === "SEARCH_BY") {
    updatedState = { ...state, searchBy: action.input, searchOptions: [] };

    return updatedState;
  }

  if (action.type === "TOTAL_CUISINES_SEARCH_OPTIONS") {
    const updatedTotalCuisinesSearchOptions = cuisinesTotalSearchOptions(
      action.input
    );

    const updatedState = {
      ...state,
      totalCuisinesSearchOptions: updatedTotalCuisinesSearchOptions,
    };

    return updatedState;
  }

  if (action.type === "SEARCH_OPTIONS") {
    let updatedSearchOptions = [];

    if (state.searchBy === "name") {
      updatedSearchOptions = searchNameOptions(
        state.totalRestaurants,
        action.input
      );
    }

    if (state.searchBy === "cusine" && action.input) {
      updatedSearchOptions = searchCuisinesOptions(
        state.totalCuisinesSearchOptions,
        action.input
      );
    }
    const updatedSate = {
      ...state,
      searchOptions: updatedSearchOptions,
    };
    return updatedSate;
  }

  if (action.type === "TOTAL_RESTAURANTS") {
    const updatedState = { ...state, totalRestaurants: action.input };

    return updatedState;
  }

  if (action.type === "FILTERED_RESTAURANTS") {
    let updatedState;

    if (action.firstTime) {
      updatedState = { ...state, filteredRestaurants: action.input };
    } else {
      const updatedFilteredRestaurants = filterRestaurantsFunc(
        state.totalRestaurants,
        action.filterValue,
        state.searchBy
      );
      updatedState = {
        ...state,
        filteredRestaurants: updatedFilteredRestaurants,
      };
    }

    return updatedState;
  }

  return defaultSearchState;
};

const SearchProvider = ({ children }) => {
  const [searchState, dispachSearchState] = useReducer(
    searchReducer,
    defaultSearchState
  );

  const searchContext = {
    filteredRestaurants: searchState.filteredRestaurants,
    searchBy: searchState.searchBy,
    searchOptions: searchState.searchOptions,
    isSearchButtonClicked: searchState.isSearchButtonClicked,
    totalRestaurants: searchState.totalRestaurants,
    totalCuisinesSearchOptions: searchState.totalCuisinesSearchOptions,
    setTotalRestaurants: (input) => {
      dispachSearchState({ type: "TOTAL_RESTAURANTS", input: input });
    },
    setIsSearchButtonClicked: () => {},
    setSearchBy: (input) =>
      dispachSearchState({ type: "SEARCH_BY", input: input }),
    setSearchOptions: (input, clear) => {
      dispachSearchState({
        type: "SEARCH_OPTIONS",
        input: input,
        clear: clear,
      });
    },
    setTotalCuisinesSearchOptions: (input) => {
      dispachSearchState({
        type: "TOTAL_CUISINES_SEARCH_OPTIONS",
        input: input,
      });
    },
    filterRestaurants: (input, firstTime, filterValue = "") => {
      dispachSearchState({
        type: "FILTERED_RESTAURANTS",
        input: input,
        firstTime: firstTime,
        filterValue: filterValue,
      });
    },
  };

  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
