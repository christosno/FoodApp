import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { filterMenuItems } from "../../utils/filterMenuItems";

const MenuCategory = ({ totalItems, item }) => {
  const [menuItems, setMenuItems] = useState(null);
  const [isChildVisible, setIsChildVisible] = useState(false);

  const MenuCategoryClickHandler = (item) => {
    setIsChildVisible(!isChildVisible);

    if (item.entities) {
      const menuEntities = item.entities;
      const finalItems = filterMenuItems(totalItems, menuEntities);

      setMenuItems(finalItems);
    }
  };

  return (
    <div className="py-1 rounded cursor-pointer bg-slate-800 text-white">
      <div>
        <h2
          onClick={() => MenuCategoryClickHandler(item)}
          className="font-medium p-2 mt-0.5 hover:bg-slate-700 hover:text-white"
        >
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
