export const filterRestaurantsFunc = (
  totalRestaurants,
  filterValue,
  searchBy
) => {
  if (searchBy === "name") {
    const fiteredRestaurants = totalRestaurants.filter((res) => {
      return res.data.name === filterValue;
    });
    return fiteredRestaurants;
  }

  if (searchBy === "cusine") {
    const fiteredRestaurants = totalRestaurants.filter((res) => {
      return res.data.cuisines.some((cuisine) => {
        return cuisine === filterValue;
      });
    });
    return fiteredRestaurants;
  }
  return totalRestaurants;
};

export const cuisinesTotalSearchOptions = (restaurantList) => {
  // fix cusines name with more than one word like "mplampla mplampla"
  console.log("-------------SEARCH TOTAL CUISINE -----------------------");
  if (!restaurantList || restaurantList.length === 0) {
    return [];
  }
  const totalSearchOptinos = restaurantList
    .map((restaurant) => {
      return restaurant.data.cuisines;
    })
    .reduce((accum, cur) => {
      return [...new Set([...accum, ...cur])];
    }, []);
  console.log("IN FILTER SEARCH OPTIONS", totalSearchOptinos);

  return totalSearchOptinos;
};

export const searchCuisinesOptions = (totalSearchOptions, searchInput) => {
  console.log("-------------SEARCH CUISINE -----------------------");
  return totalSearchOptions.filter((searchOption) => {
    return searchOption.toUpperCase().startsWith(searchInput.toUpperCase());
  });
};

export const searchNameOptions = (restaurantList, searchInput) => {
  if (!searchInput) {
    return [];
  }

  const restaurantNames = restaurantList.reduce((accum, cur) => {
    return [...accum, cur?.data?.name];
  }, []);

  const spiltRestaurantName = restaurantNames.reduce((accum, cur) => {
    return [...accum, ...cur.split(" ")];
  }, []);

  const includedNames = spiltRestaurantName.filter((searchOption) => {
    return searchOption.toUpperCase().startsWith(searchInput.toUpperCase());
  });

  return restaurantNames.filter((resName) =>
    includedNames.some((includedName) => resName.includes(includedName))
  );
};
