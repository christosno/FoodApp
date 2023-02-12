export const filterRestaurantsFunc = (restaurantList, inputValue) => {
  console.log("IN FILTER RESTAURANTS");
  if (inputValue === "") {
    console.log("IN FILTER RESTAURANTS", restaurantList);
    return restaurantList;
  }
  return restaurantList.filter((restaurant) => {
    const restaurantName = restaurant.data.name.toUpperCase().split(" ");
    return restaurantName.includes(inputValue.toUpperCase());
  });
};

export const totalSearchOptions = (restaurantList) => {
  if (!restaurantList || restaurantList.length === 0) {
    return [];
  }
  const tSearchOptinos = restaurantList
    .map((restaurant) => {
      return restaurant.data.cuisines;
    })
    .reduce((accum, cur) => {
      return [...new Set([...accum, ...cur])];
    }, []);
  console.log("IN FILTER SEARCH OPTIONS", tSearchOptinos);

  return tSearchOptinos;
};

export const searchCuisinesOptions = (totalSearchOptions, searchInput) => {
  return totalSearchOptions.filter((searchOption) => {
    return searchOption.toUpperCase().startsWith(searchInput.toUpperCase());
  });
};
