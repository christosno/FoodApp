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
    <div className="rounded border cursor-pointer font-[Poppins] bg-sky-800 text-white">
      <div onClick={() => MenuCategoryClickHandler(item)}>
        <h2 className="font-medium p-2 hover:bg-sky-400 hover:text-gray-800">
          {item.name}
        </h2>
      </div>
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
    </div>
  );
};

export default MenuMainCategory;
