import { IMG_CDN_URL } from "../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({
  name,
  lastMileTravel,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  const { shortDescriptionList } = aggregatedDiscountInfo;
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg m-6">
      <img
        className="w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="rest img"
      />
      <div className="px-6 py-4">
        <div className=" font-[Poppins] font-bold text-xl mb-2">{name}</div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={i <= avgRating ? "active" : ""}
            />
          ))}
        </div>
        <h5 className="font-[Poppins] text-gray-800 text-base">
          {costForTwoString}
        </h5>
        <h5 className="text-gray-700 text-base">
          {parseFloat(lastMileTravel).toFixed(2)} km
        </h5>
        <h5 className="text-gray-700 text-base">
          {shortDescriptionList[0]?.meta}
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
