export const selectFavorites = (favorites) =>
  Object.keys(favorites).filter((key) => favorites[key])
