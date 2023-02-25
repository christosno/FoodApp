import { IMG_CDN_URL } from "../../constants";
import RatingStars from "../UI/RatingStars";

const RestaurantCard = ({
  name,
  lastMileTravel,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  const { shortDescriptionList } = aggregatedDiscountInfo;
  console.log("RestaurantCard Component");
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg mx-8 mb-8">
      <img
        className="w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="rest img"
      />
      <div className="px-6 py-4">
        <div className=" font-[Poppins] font-bold text-xl mb-2 text-center p-1">
          {name}
        </div>
        <RatingStars avgRating={avgRating} />
        <h5 className="font-[Poppins] text-gray-800 text-base text-center p-1">
          {costForTwoString}
        </h5>
        <h5 className="text-gray-700 text-base text-center p1">
          {parseFloat(lastMileTravel).toFixed(2)} km
        </h5>
        <h5 className="text-gray-700 text-base rounded bg-slate-200 p-2 text-center">
          {shortDescriptionList[0]?.meta}
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
