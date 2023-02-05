import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingStars = ({ avgRating }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= avgRating ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default RatingStars;
