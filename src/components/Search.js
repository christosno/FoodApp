import React, { useContext, useState, useEffect } from "react";
import Button from "./Button";
import RadioInput from "./RadioInput";
import { SearchContext } from "../store/search-ctx";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const searchCtx = useContext(SearchContext);

  const searchHandler = () => {};

  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchCtx.setSearchOptions(inputValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  console.log("Search Component");
  return (
    <div className="flex flex-col w-full pt-24 mb-1">
      <RadioInput />
      <div className="w-full flex mb-4">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={inputHandler}
          className="bg-white focus:outline-none focus:shadow-outline-blue border border-gray-300 rounded py-2 pr-4 pl-8 block w-full appearance-none leading-normal"
        />

        <Button
          bgColor="bg-slate-900"
          bgHoverColor="bg-slate-800"
          margin=""
          clickHandler={searchHandler}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
