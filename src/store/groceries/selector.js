export const getGroceries = (reduxState) =>
  reduxState.groceries
    .filter((item) => !item.checked)
    .map((item) => ({
      ...item,
      favorite: reduxState.user.favorites.includes(item.id),
    }));

export const getBoughtGroceries = (reduxState) =>
  reduxState.groceries
    .filter((item) => item.checked)
    .map((item) => ({
      ...item,
      favorite: reduxState.user.favorites.includes(item.id),
    }));
    
export const getTotalPrice = (reduxState) =>
  reduxState.groceries
    .reduce((sum, current) => sum + current.price * current.amount, 0)
    .toFixed(2);

export const getAverage = (reduxState) => {
  const total = reduxState.groceries.reduce(
    (sum, current) => sum + current.price * current.amount,
    0
  );

  return (total / reduxState.groceries.length).toFixed(2);
};

export const getGroceriesBySection =
  (section, lessThan, moreThan) => (reduxState) => {
    if (section === "" && lessThan === 0 && moreThan === 0)
      return reduxState.groceries;
    return reduxState.groceries
      .filter((item) => item.section === section || section === "") // either item belongs to section OR no section was chosen
      .filter((item) => item.amount > moreThan && item.amount < lessThan);
  };
