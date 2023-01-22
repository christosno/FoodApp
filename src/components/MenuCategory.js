import React, { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({ name, onClick, item }) => {
  const [menuEntities, setMenuEntities] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  console.log(item);
  const MenuCategoryClickHandler = (item) => {
    setIsChildVisible(!isChildVisible);

    if (item.entities) {
      setMenuEntities(item.entities);
    }
  };
  console.log("IN MENU CATEGORY", menuEntities);
  console.log("IN MENU CATEGORY", isChildVisible);
  return (
    <div onClick={() => MenuCategoryClickHandler(item)}>
      <p>Hi!!!!!!!!!!!!!!!!!!!!!1</p>
      {menuEntities && isChildVisible
        ? menuEntities.map((innerItem, index) => {
            return <MenuItem key={innerItem.id} id={innerItem.id} />;
          })
        : null}
    </div>
  );
};

export default MenuCategory;
