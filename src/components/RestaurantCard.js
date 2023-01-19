import { IMG_CDN_URL } from "../constants";
import "./RestaurantCard.css";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravel,
  cloudinaryImageId,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="rest img"
          className="card-img"
        />
        <div className="card-info">
          <h2 className="card-title">{name}</h2>
          <h4 className="card-cuisines">Cuisines:</h4>
          <p2 className="card-cuisines">{cuisines.join(", ")}</p2>
          <h5 className="card-distance">
            {parseFloat(lastMileTravel).toFixed(2)} km
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
