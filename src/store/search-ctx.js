import { useReducer, createContext } from "react";

export const SearchContext = createContext({
  filteredItems: [],
  searchBy: "",
  setSearchBy: (input) => {},
  filterRestaurants: (restaurantList, inputValue, searchBy) => {},
});

const defaultSearchState = {
  filteredItems: [],
  searchBy: "name",
};

const searchReducer = (state, action) => {
  if (action.type === "SEARCH_BY") {
    updatedState = { ...state, searchBy: action.input };

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
    filteredItems: searchState.filteredItems,
    searchBy: searchState.searchBy,
    setSearchBy: (input) =>
      dispachSearchState({ type: "SEARCH_BY", input: input }),
    filterRestaurants: () => {},
  };

  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
