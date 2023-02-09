import React, { useState } from "react";
import MenuCategory from "./MenuCategory";
import MenuItem from "./MenuItem";
import { filterMenuItems } from "../utils/filterMenuItems";

const MenuMainCategory = ({ item, totalItems }) => {
  console.log("MenuMainCategory Component");
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
    <div className="py-1 rounded m-0.5 cursor-pointer font-[Poppins] bg-slate-900 text-white">
      <div>
        <h2
          onClick={() => MenuCategoryClickHandler(item)}
          className="font-medium p-2 bg-slate-900 hover:bg-slate-800"
        >
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
            return <MenuItem key={innerItem.id} item={innerItem} />;
          })
        : null}
    </div>
  );
};

export default MenuMainCategory;
