import React from "react";

const MenuItem = ({ name, price }) => {
  return (
    <div className="rounded border cursor-pointer bg-white text-black">
      <h1>{name}</h1>
      <p>{`${price}$`}</p>
    </div>
  );
};

export default MenuItem;
