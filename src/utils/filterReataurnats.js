export const filterRestaurants = (restaurantList, inputValue) => {
  if (inputValue === "") {
    return restaurantList;
  }
  return restaurantList.filter((restaurant) => {
    const restaurantName = restaurant.data.name.toUpperCase().split(" ");
    return restaurantName.includes(inputValue.toUpperCase());
  });
};
