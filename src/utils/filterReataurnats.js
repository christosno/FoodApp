export const filterRestaurantsFunc = (totalRestaurants, filterValue) => {
  return totalRestaurants;
};

export const cuisinesTotalSearchOptions = (restaurantList) => {
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
