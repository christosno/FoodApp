import { useState, useEffect } from "react";
import { API_MENU_CALL, IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import ErrorComp from "./ErrorComp";
import MenuMainCategory from "./MenuMainCategory";
import useFetch from "../utils/useFetch";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const applyData = (menuData) => {
    const finalMenuData = menuData?.data;
    console.log(finalMenuData);
    setRestaurantMenu(finalMenuData);
  };

  const {
    isLoading,
    error,
    fetchFunction: fetchRestaurantMenuData,
  } = useFetch({ url: API_MENU_CALL + id }, applyData);

  useEffect(() => {
    fetchRestaurantMenuData();
  }, []);

  return (
    <div className="menu-container">
      {error ? (
        <>
          <ErrorComp message={error.message} />
          <h1>{error}</h1>
        </>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="menu-header">
            <h1>Restraunt id: {id}</h1>
            <h2>{restaurantMenu?.name}</h2>
            <img src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId} />
            <h3>{restaurantMenu?.area}</h3>
            <h3>{restaurantMenu?.city}</h3>
            <h3>{restaurantMenu?.avgRating} stars</h3>
            <h3>{restaurantMenu?.costForTwoMsg}</h3>
          </div>
          <div className="menu-items">
            <h1>Menu</h1>
            {restaurantMenu?.menu?.widgets.map((item, index) => {
              return (
                <MenuMainCategory
                  key={index}
                  item={item}
                  totalItems={Object.values(restaurantMenu?.menu?.items)}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
