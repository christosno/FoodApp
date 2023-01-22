import React, { useState } from "react";
import MenuCategory from "./MenuCategory";
import MenuItem from "./MenuItem";
import { filterMenuItems } from "../utils/filterMenuItems";

const MenuMainCategory = ({ item, totalItems }) => {
  // const [menuEntities, setMenuEntities] = useState(null);
  const [menuWidgets, setMenuWidgents] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [isChildVisible, setIsChildVisible] = useState(false);

  const MenuCategoryClickHandler = (item) => {
    setIsChildVisible(!isChildVisible);
    if (item?.widgets) {
      setMenuItems(null);
      setMenuWidgents(item.widgets);
    }

    // if (item.entities && !isSubWidget) {
    //   setMenuEntities(item.entities);
    //   setMenuWidgents(null);
    // }

    if (item.entities) {
      const menuEntities = item.entities; // fix the variable name
      const finalItems = filterMenuItems(totalItems, menuEntities); // put the correct menuEntities
      console.log("finalItems", finalItems);
      setMenuItems(finalItems); /// remove it and use setMenuitems
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
                // onClick={() => MenuCategoryClickHandler(innerItem, true)}
                name={innerItem.name}
                item={innerItem}
                totalItems={totalItems}
              />
            );
          })
        : null}
      {menuItems && isChildVisible /// remuve the menuEntities and add MenuItems
        ? menuItems.map((innerItem, index) => {
            console.log("INNER ITEM !!!", innerItem);
            return <MenuItem key={innerItem.id} {...innerItem} />;
          })
        : null}
    </>
  );
};

export default MenuMainCategory;
