export const filterMenuItems = (totalItems, entities) => {
  console.log("in filter", totalItems);
  console.log("in filter", entities);
  return totalItems.filter((obj) => entities.map((o) => o.id).includes(obj.id));
};
