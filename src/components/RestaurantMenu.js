import { useState, useEffect } from "react";
import { API_MENU_CALL, IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import ErrorComp from "./ErrorComp";
import MenuMainCategory from "./MenuMainCategory";
import useFetch from "../utils/useFetch";
import RatingStars from "./RatingStars";

const RestaurantMenu = () => {
  console.log("RestaurantMenu Component");
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
    <div className="flex flex-col items-center mt-24">
      {error ? (
        <>
          <ErrorComp message={error.message} />
          <h1>{error}</h1>
        </>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <div className="w-full md:w-2/3">
          <div className="text-center">
            <h1 className="text-4xl font-[Poppins] text-white">
              {restaurantMenu?.name}
            </h1>
            <div className="my-4">
              <img
                className="w-128 h-64 object-cover rounded mx-auto"
                src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
                alt={restaurantMenu?.name}
              />
            </div>
            <h3 className="text-lg font-[Poppins] text-white">
              {restaurantMenu?.area}
            </h3>
            <h3 className="text-lg font-[Poppins] text-white">
              {restaurantMenu?.city}
            </h3>
            <RatingStars avgRating={restaurantMenu?.avgRating} />
            <h3 className="text-lg font-[Poppins] text-white">
              {restaurantMenu?.costForTwoMsg}
            </h3>
          </div>
          <div className="text-center mt-12">
            <h1 className="text-4xl font-[Poppins] text-white mb-4">Menu</h1>

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
