import { useEffect, useContext } from "react";
import RestaurantCard from "../components/restaurant/RestaurantCard";
import { API_CALL } from "../constants";
import { Link } from "react-router-dom";
import ErrorComp from "../components/errors/ErrorComp";
import useFetch from "../utils/useFetch";
import Search from "../components/search/Search";
import { SearchContext } from "../store/search-ctx";

const Body = () => {
  const searchCtx = useContext(SearchContext);

  const applyData = (restaurantData) => {
    const restaurantList = restaurantData?.data?.cards[2]?.data?.data?.cards;
    searchCtx.setTotalRestaurants(restaurantList);
    searchCtx.filterRestaurants(restaurantList, false);
    searchCtx.setTotalCuisinesSearchOptions(restaurantList);
  };

  const {
    isLoading,
    error,
    fetchFunction: callForRestaurants,
  } = useFetch({ url: API_CALL }, applyData);

  useEffect(() => {
    if (searchCtx.totalRestaurants && searchCtx.totalRestaurants.length > 0) {
      searchCtx.filterRestaurants(searchCtx.totalRestaurants, false);
      searchCtx.setInputValue("");
      return;
    }

    callForRestaurants();
  }, []);

  return (
    <div className=" bg-slate-700 ">
      {error ? (
        <div className="error-container">
          <ErrorComp message={error.message} />
        </div>
      ) : (
        <>
          <Search />
          <div className="flex flex-wrap justify-center  w-4/5 m-auto">
            {!searchCtx.isSearchButtonClicked &&
            searchCtx.filteredRestaurants.length === 0 ? (
              <div className="loading">Loading......</div>
            ) : (
              <>
                {searchCtx.filteredRestaurants.length === 0 ? (
                  <div className="no-results">No restaurants was found</div>
                ) : (
                  searchCtx.filteredRestaurants.map((restaurant) => {
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
