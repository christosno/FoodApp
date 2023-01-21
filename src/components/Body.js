import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_CALL } from "../constants";
import { Link } from "react-router-dom";
import ErrorComp from "./ErrorComp";
import "./Body.css";

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
  const [error, setError] = useState(null);

  useEffect(() => {
    callForRestaurants();
  }, []);

  const callForRestaurants = async () => {
    try {
      const data = await fetch(API_CALL);
      if (!data.ok) {
        throw new Error(data.status + " Ooops... we could not fetch data");
      }
      const restaurantData = await data.json();
      const restaurantList = restaurantData?.data?.cards[2]?.data?.data?.cards;
      if (!restaurantList) {
        throw new Error("Ooopss, No restaurants in our data");
      }
      setRestaurants(restaurantList);
      console.log(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.log(error.message);
      setError(error);
    }
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
      {error ? (
        <div className="error-container">
          <ErrorComp message={error.message} />
        </div>
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="search"
              value={inputValue}
              onChange={inputHandler}
              className="search-input"
            />
            <button onClick={searchHandler} className="search-btn">
              Search
            </button>
          </div>
          <div className="restaurant-list">
            {!isSearchClicked && filteredRestaurants.length === 0 ? (
              <div className="loading">Loading......</div>
            ) : (
              <>
                {filteredRestaurants.length === 0 ? (
                  <div className="no-results">No restaurants was found</div>
                ) : (
                  filteredRestaurants.map((restaurant) => {
                    return (
                      <Link
                        key={restaurant.data.id}
                        to={"restaurant/" + restaurant.data.id}
                        className={"reataurant-cart-link"}
                      >
                        <RestaurantCard {...restaurant.data} />
                      </Link>
                    );
                  })
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
