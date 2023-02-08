import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { filterMenuItems } from "../utils/filterMenuItems";

const MenuCategory = ({ totalItems, item }) => {
  console.log("MenuCategory Component");
  const [menuItems, setMenuItems] = useState(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  console.log(item);
  const MenuCategoryClickHandler = (item) => {
    setIsChildVisible(!isChildVisible);

    if (item.entities) {
      const menuEntities = item.entities;
      const finalItems = filterMenuItems(totalItems, menuEntities);
      console.log("finalItems", finalItems);
      setMenuItems(finalItems);
    }
  };

  return (
    <div className="ml-4 rounded cursor-pointer bg-slate-800 text-white">
      <div onClick={() => MenuCategoryClickHandler(item)}>
        <h2 className="ont-medium p-2 hover:bg-slate-700 hover:text-white">
          {item.name}
        </h2>
        {menuItems && isChildVisible
          ? menuItems.map((innerItem, index) => {
              return <MenuItem key={innerItem.id} item={innerItem} />;
            })
          : null}
      </div>
    </div>
  );
};

export default MenuCategory;
