import { IMG_CDN_URL } from "../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravel,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  const { shortDescriptionList } = aggregatedDiscountInfo;
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
          <div className="rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={i <= avgRating ? "active" : ""}
              />
            ))}
          </div>
          {/* <h4 className="card-cuisines">Cuisines:</h4> */}
          {/* <p className="card-cuisines">{cuisines.join(", ")}</p> */}
          <h5 className="card-cost">{costForTwoString}</h5>
          <h5 className="card-distance">
            {parseFloat(lastMileTravel).toFixed(2)} km
          </h5>
          <h5>{shortDescriptionList[0]?.meta}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
