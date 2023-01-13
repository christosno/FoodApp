import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";

const filterRestaurants = (restaurantList, inputValue) => {
  if (inputValue === "") {
    return restaurantList;
  }
  return restaurantList.filter((restaurant) => {
    const restaurantName = restaurant.data.name.toUpperCase().split(" ");
    return restaurantName.includes(inputValue.toUpperCase());
  });
};

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const clickHandler = () => {
    const fiteredRestaurants = filterRestaurants(restaurantList, inputValue);
    setRestaurants(fiteredRestaurants);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={inputHandler}
        />
        <button onClick={clickHandler}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
