import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravel,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="rest img" />
      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h4>{lastMileTravel} km</h4>
    </div>
  );
};

export default RestaurantCard;
