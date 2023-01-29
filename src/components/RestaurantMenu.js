import { useState, useEffect } from "react";
import { API_MENU_CALL, IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import ErrorComp from "./ErrorComp";
import MenuMainCategory from "./MenuMainCategory";
import useFetch from "../utils/useFetch";

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
    <div className="bg-sky-200 mt-16 p-10">
      {error ? (
        <>
          <ErrorComp message={error.message} />
          <h1>{error}</h1>
        </>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-2 gap-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{restaurantMenu?.name}</h1>
            <div className="m-4">
              <img
                className="m-auto w-64 h-64 object-cover rounded-md"
                src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
                alt={restaurantMenu?.name}
              />
            </div>
            <h3 className="text-lg font-medium mt-4">{restaurantMenu?.area}</h3>
            <h3 className="text-lg font-medium">{restaurantMenu?.city}</h3>
            <h3 className="text-lg font-medium">
              {restaurantMenu?.avgRating} stars
            </h3>
            <h3 className="text-lg font-medium">
              {restaurantMenu?.costForTwoMsg}
            </h3>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Menu</h1>
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
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
