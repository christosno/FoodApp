export const filterMenuItems = (totalItems, entities) => {
  return totalItems.filter((obj) => entities.map((o) => o.id).includes(obj.id));
};
