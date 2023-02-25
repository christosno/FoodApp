import React, { useContext } from "react";
import { SearchContext } from "../../store/search-ctx";

const RadioInput = () => {
  const searchCtx = useContext(SearchContext);

  console.log(searchCtx);
  return (
    <div className="flex m-1 rounded  w-10/12 md:w-2/4 lg:w-1/4 justify-center items-center">
      <h3 className="text-white mr-2">Search By</h3>
      <div className="flex m-2">
        <input
          type="radio"
          value="name"
          checked={searchCtx.searchBy === "name"}
          onChange={() => searchCtx.setSearchBy("name")}
        />
        <h3 className="bg-slate-500 p-1 rounded ml-1">Name</h3>
      </div>
      <div className="flex m-2">
        <input
          type="radio"
          value="cusine"
          checked={searchCtx.searchBy === "cusine"}
          onChange={() => searchCtx.setSearchBy("cusine")}
        />
        <h3 className="bg-slate-500 p-1 rounded ml-1">Cusine</h3>
      </div>
    </div>
  );
};

export default RadioInput;
