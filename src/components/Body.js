import { useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_CALL } from "../constants";
import { Link } from "react-router-dom";
import ErrorComp from "./ErrorComp";
import useFetch from "../utils/useFetch";
import Search from "./Search";
import { SearchContext } from "../store/search-ctx";
import SearchOptions from "./SearchOptions";

const Body = () => {
  const searchCtx = useContext(SearchContext);

  const applyData = (restaurantData) => {
    console.log("IN APPLY DATA______________________________");
    const restaurantList = restaurantData?.data?.cards[2]?.data?.data?.cards;
    searchCtx.setTotalRestaurants(restaurantList);
    searchCtx.filterRestaurants(restaurantList, false);
    searchCtx.setTotalCuisinesSearchOptions(restaurantList);
  };

  console.log("SEARCH CONTEXT", searchCtx);

  const {
    isLoading,
    error,
    fetchFunction: callForRestaurants,
  } = useFetch({ url: API_CALL }, applyData);

  useEffect(() => {
    if (searchCtx.totalRestaurants && searchCtx.totalRestaurants.length > 0) {
      console.log("USEEFFECT / USE THE EXISTING DATA");
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
          <SearchOptions />
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
