import React, { useContext, useEffect } from "react";
import { SearchContext } from "../store/search-ctx";

const SearchOptions = () => {
  const searchCtx = useContext(SearchContext);
  const options = searchCtx.searchOptions;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 70) {
        searchCtx.setIsOptionsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickHandler = (searchOption) => {
    searchCtx.filterRestaurants(searchCtx.totalRestaurants, true, searchOption);
    searchCtx.setInputValue(searchOption);
    searchCtx.clearOptions();
  };

  return (
    <>
      {options.length > 0 && searchCtx.isOptionsVisible ? (
        <div className="absolute bg-white w-full rounded px-8 top-52">
          {/* have to fix the key  */}
          {options.map((option, index) => (
            <p
              onClick={() => clickHandler(option)}
              key={index}
              className="p-1 m-1 rounded shadow hover:bg-slate-100 cursor-pointer"
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
