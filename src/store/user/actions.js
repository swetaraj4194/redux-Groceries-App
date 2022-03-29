import { TOGGLE_FAVORITE } from "./types";

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});
