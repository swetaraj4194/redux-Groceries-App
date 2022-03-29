import { TOGGLE_FAVORITE } from "./types";

const initialState = {
  name: "David",
  favorites: ["1", "4"],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FAVORITE:
      // // id is in favorites
      // if (state.favorites.includes(payload)) {
      //   return {
      //     ...state,
      //     favorites: state.favorites.filter(
      //       (favoriteId) => favoriteId !== payload
      //     ),
      //   };
      // }

      // // id is not in favorites
      // return {
      //   ...state,
      //   favorites: [...state.favorites, payload],
      // };

      return {
        ...state,
        favorites: state.favorites.includes(payload)
          ? state.favorites.filter((favoriteId) => favoriteId !== payload)
          : [...state.favorites, payload],
      };
    default: {
      return state;
    }
  }
}
