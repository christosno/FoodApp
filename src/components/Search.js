import React from "react";
import Button from "./Button";
import RadioInput from "./RadioInput";

const Search = ({ value, inputHandler, searchHandler }) => {
  console.log("Search Component");
  return (
    <div className="flex flex-col w-full pt-24 mb-4 ml-1">
      {/* <div className="flex m-2 rounded bg-slate-500 p-1 w-4/6 md:w-1/4 lg:w-1/4 justify-center items-baseline">
        <h3 className="text-white">Search by</h3>
        <div className="flex">
          <button className="bg-slate-900 ml-2 p-2 rounded text-white cursor-pointer  hover:bg-slate-700 active:bg-slate-700">
            Name
          </button>
          <button className="bg-slate-900 ml-2 p-2 rounded text-white cursor-pointer  hover:bg-slate-700 active:bg-slate-700">
            Cusine
          </button>
        </div>
      </div> */}
      <RadioInput />
      <div className="w-full flex mb-4 ml-1">
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
    </div>
  );
};

export default Search;
