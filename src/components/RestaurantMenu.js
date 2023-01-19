import { useState, useEffect } from "react";
import { API_MENU_CALL, IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import ErrorComp from "./ErrorComp";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurantMenuData();
  }, []);

  const fetchRestaurantMenuData = async () => {
    try {
      const data = await fetch(API_MENU_CALL + id);
      if (!data.ok) {
        throw new Error(data.status + " Ooops... we could not fetch data");
      }
      const menuData = await data.json();
      const finalMenuData = menuData?.data;
      if (!finalMenuData) {
        throw new Error("Ooopss, No menu in our data");
      }
      setRestaurantMenu(finalMenuData);
      setIsLoaded(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="menu-container">
      {error ? (
        <>
          <ErrorComp message={error.message} />
          <h1>{error}</h1>
        </>
      ) : !isLoaded ? (
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
            {Object.values(restaurantMenu?.menu?.items).map((menuItem) => {
              return (
                <div key={menuItem.id}>
                  <p>{menuItem.name}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
