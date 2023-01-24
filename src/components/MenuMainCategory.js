import React, { useState } from "react";
import MenuCategory from "./MenuCategory";
import MenuItem from "./MenuItem";
import { filterMenuItems } from "../utils/filterMenuItems";

const MenuMainCategory = ({ item, totalItems }) => {
  const [menuWidgets, setMenuWidgents] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [isChildVisible, setIsChildVisible] = useState(false);

  const MenuCategoryClickHandler = (item) => {
    setIsChildVisible(!isChildVisible);
    if (item?.widgets) {
      setMenuWidgents(item.widgets);
    }

    if (item.entities) {
      const menuEntities = item.entities;
      const finalItems = filterMenuItems(totalItems, menuEntities);
      console.log("finalItems", finalItems);
      setMenuItems(finalItems);
    }
  };
  console.log("IN MAIN MENU CATEGORI", menuWidgets);
  return (
    <>
      <div onClick={() => MenuCategoryClickHandler(item)}>{item.name}</div>
      {menuWidgets && isChildVisible
        ? menuWidgets.map((innerItem, index) => {
            return (
              <MenuCategory
                key={index}
                name={innerItem.name}
                item={innerItem}
                totalItems={totalItems}
              />
            );
          })
        : null}
      {menuItems && isChildVisible
        ? menuItems.map((innerItem, index) => {
            console.log("INNER ITEM !!!", innerItem);
            return <MenuItem key={innerItem.id} {...innerItem} />;
          })
        : null}
    </>
  );
};

export default MenuMainCategory;
