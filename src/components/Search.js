import React from "react";
import Button from "./Button";

const Search = ({ value, inputHandler, searchHandler }) => {
  console.log("Search Component");
  return (
    <div className="w-full pt-24 flex mb-4 ml-1">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={inputHandler}
        className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded py-2 pr-4 pl-8 block w-full appearance-none leading-normal"
      />
      <Button
        bgColor="bg-slate-900"
        bgHoverColor="bg-slate-800"
        margin="ml-1 mr-2"
        clickHandler={searchHandler}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
