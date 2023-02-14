import React, { useContext } from "react";
import { SearchContext } from "../store/search-ctx";

const SearchOptions = () => {
  const searchCtx = useContext(SearchContext);
  const options = searchCtx.searchOptions;

  const clickHandler = (searchOption) => {
    searchCtx.filterRestaurants(
      searchCtx.totalRestaurants,
      false,
      searchOption
    );
    searchCtx.setSearchOptions(searchCtx.totalRestaurants, true);
    // searchCtx.setInputValue(searchOption);
  };

  return (
    <>
      {options.length > 0 ? (
        <div className="fixed bg-white w-full rounded px-8 ">
          {/* have to fix the key  */}
          {options.map((option, index) => (
            <p
              onClick={() => clickHandler(option)}
              key={index}
              className="p-1 m-1 rounded border-b-2 border-slate-400 hover:bg-slate-100 cursor-pointer"
            >
              {option}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SearchOptions;
