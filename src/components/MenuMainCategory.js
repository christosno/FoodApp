import React, { useState } from "react";
import MenuCategory from "./MenuCategory";
import MenuItem from "./MenuItem";

const MenuMainCategory = ({ item }) => {
  const [menuEntities, setMenuEntities] = useState(null);
  const [menuWidgets, setMenuWidgents] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  const MenuCategoryClickHandler = (item) => {
    setIsChildVisible(!isChildVisible);
    if (item?.widgets) {
      setMenuEntities(null);
      setMenuWidgents(item.widgets);
    }

    // if (item.entities && !isSubWidget) {
    //   setMenuEntities(item.entities);
    //   setMenuWidgents(null);
    // }

    if (item.entities) {
      setMenuEntities(item.entities);
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
              />
            );
          })
        : null}
      {menuEntities && isChildVisible
        ? menuEntities.map((innerItem, index) => {
            return <MenuItem key={innerItem.id} id={innerItem.id} />;
          })
        : null}
    </>
  );
};

export default MenuMainCategory;
