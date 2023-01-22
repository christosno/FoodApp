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
      const menuEntities = item.entities; // fix the variable name
      const finalItems = filterMenuItems(totalItems, menuEntities); // put the correct menuEntities
      console.log("finalItems", finalItems);
      setMenuItems(finalItems); /// remove it and use setMenuitems
    }
  };

  return (
    <div onClick={() => MenuCategoryClickHandler(item)}>
      <p>Hi!!!!!!!!!!!!!!!!!!!!!1</p>
      {menuItems && isChildVisible
        ? menuItems.map((innerItem, index) => {
            return <MenuItem key={innerItem.id} {...innerItem} />;
          })
        : null}
    </div>
  );
};

export default MenuCategory;
