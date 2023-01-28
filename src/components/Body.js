import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_CALL } from "../constants";
import { Link } from "react-router-dom";
import ErrorComp from "./ErrorComp";
import useFetch from "../utils/useFetch";
import Search from "./Search";
import { filterRestaurants } from "../utils/filterReataurnats";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isSearchClicked, setIsSearchClikted] = useState(false);

  const applyData = (restaurantData) => {
    const restaurantList = restaurantData?.data?.cards[2]?.data?.data?.cards;
    setRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  const {
    isLoading,
    error,
    fetchFunction: callForRestaurants,
  } = useFetch({ url: API_CALL }, applyData);

  useEffect(() => {
    callForRestaurants();
  }, []);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const searchHandler = () => {
    console.log("SEARCH HNDLER");
    setIsSearchClikted(true);
    const fiteredRestaurants = filterRestaurants(restaurants, inputValue);
    setFilteredRestaurants(fiteredRestaurants);
  };
  console.log(restaurants);
  return (
    <div className=" bg-sky-200">
      {error ? (
        <div className="error-container">
          <ErrorComp message={error.message} />
        </div>
      ) : (
        <>
          <Search
            inputHandler={inputHandler}
            value={inputValue}
            searchHandler={searchHandler}
          />
          <div className="flex flex-wrap justify-center">
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
    </div>
  );
};

export default Body;
