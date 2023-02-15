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
  inputValue: "",
  isSearchButtonClicked: false,
  totalRestaurants: [],
  isClearedOptions: false,
  isOptionsVisible: true,
  setTotalRestaurants: () => {},
  setTotalCuisinesSearchOptions: () => {},
  setInputValue: () => {},
  setIsSearchButtonClicked: () => {},
  setSearchBy: (input) => {},
  setSearchOptions: (searchBy) => {},
  filterRestaurants: () => {},
  clearOptions: () => {},
  setIsOptionsVisible: () => {},
});

const defaultSearchState = {
  filteredRestaurants: [],
  totalCuisinesSearchOptions: [],
  searchOptions: [],
  searchBy: "name",
  isSearchButtonClicked: false,
  totalRestaurants: [],
  inputValue: "",
  isClearedOptions: false,
  isOptionsVisible: true,
};

const searchReducer = (state, action) => {
  if (action.type === "SEARCH_BY") {
    const updatedState = {
      ...state,
      searchBy: action.input,
      searchOptions: [],
      inputValue: "",
      filteredRestaurants: state.totalRestaurants,
    };

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
    let updatedState;

    if (state.isClearedOptions) {
      updatedState = {
        ...state,
        searchOptions: updatedSearchOptions,
        isClearedOptions: false,
      };
    } else {
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
      updatedState = {
        ...state,
        searchOptions: updatedSearchOptions,
      };
    }
    return updatedState;
  }

  if (action.type === "TOTAL_RESTAURANTS") {
    const updatedState = { ...state, totalRestaurants: action.input };

    return updatedState;
  }

  if (action.type === "FILTERED_RESTAURANTS") {
    let updatedState;

    if (!action.doFilterDAta) {
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

  if (action.type === "INPUT_VALUE") {
    const updatedState = { ...state, inputValue: action.input };

    return updatedState;
  }

  if (action.type === "CLEAR_SEARCH_OPTIONS") {
    const updatedState = { ...state, isClearedOptions: true };

    return updatedState;
  }

  if (action.type === "IS_OPTIONS_VISIBLE") {
    const updatedState = { ...state, isOptionsVisible: action.input };

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
    inputValue: searchState.inputValue,
    isOptionsVisible: searchState.isOptionsVisible,
    setTotalRestaurants: (input) => {
      dispachSearchState({ type: "TOTAL_RESTAURANTS", input: input });
    },
    setIsSearchButtonClicked: () => {},
    setSearchBy: (input) =>
      dispachSearchState({ type: "SEARCH_BY", input: input }),
    setSearchOptions: (input) => {
      dispachSearchState({
        type: "SEARCH_OPTIONS",
        input: input,
      });
    },
    setTotalCuisinesSearchOptions: (input) => {
      dispachSearchState({
        type: "TOTAL_CUISINES_SEARCH_OPTIONS",
        input: input,
      });
    },
    filterRestaurants: (input, doFilterDAta, filterValue = "") => {
      dispachSearchState({
        type: "FILTERED_RESTAURANTS",
        input: input,
        doFilterDAta: doFilterDAta,
        filterValue: filterValue,
      });
    },
    setInputValue: (input) => {
      dispachSearchState({ type: "INPUT_VALUE", input: input });
    },
    clearOptions: () => {
      dispachSearchState({ type: "CLEAR_SEARCH_OPTIONS" });
    },
    setIsOptionsVisible: (input) => {
      dispachSearchState({ type: "IS_OPTIONS_VISIBLE", input: input });
    },
  };

  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
