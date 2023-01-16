import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../constants";

// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

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
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isSearchClicked, setIsSearchClikted] = useState(false);

  useEffect(() => {
    callForRestaurants();
  }, []);

  const callForRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantData = await data.json();
    console.log(restaurantData.data.cards[2].data.data.cards);
    const restaurantList = restaurantData.data.cards[2].data.data.cards;
    setRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const searchHandler = () => {
    setIsSearchClikted(true);
    const fiteredRestaurants = filterRestaurants(restaurants, inputValue);
    setFilteredRestaurants(fiteredRestaurants);
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
        <button onClick={searchHandler}>Search</button>
      </div>
      <div className="restaurant-list">
        {!isSearchClicked && filteredRestaurants.length === 0 ? (
          <div>Loading......</div>
        ) : (
          <>
            {filteredRestaurants.length === 0 ? (
              <div>No restaurants was found</div>
            ) : (
              filteredRestaurants.map((restaurant) => {
                return (
                  <RestaurantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                );
              })
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Body;
