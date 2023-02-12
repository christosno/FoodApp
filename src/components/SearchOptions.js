import React, { useContext } from "react";
import { SearchContext } from "../store/search-ctx";

const SearchOptions = () => {
  const searchCtx = useContext(SearchContext);
  const options = searchCtx.searchOptions;
  return (
    <>
      {options.length > 0 ? (
        <div className="fixed bg-white w-full rounded px-8 ">
          {/* have to fix the key  */}
          {options.map((option, index) => (
            <p key={index}>{option}</p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SearchOptions;
