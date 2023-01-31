import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { filterMenuItems } from "../utils/filterMenuItems";

const MenuCategory = ({ totalItems, item }) => {
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
    <div className="ml-4 max-w-sm rounded border cursor-pointer border-gray-300">
      <div onClick={() => MenuCategoryClickHandler(item)}>
        <h2 className="font-medium p-2 hover:bg-gray-300">{item.name}</h2>
        {menuItems && isChildVisible
          ? menuItems.map((innerItem, index) => {
              return <MenuItem key={innerItem.id} {...innerItem} />;
            })
          : null}
      </div>
    </div>
  );
};

export default MenuCategory;
