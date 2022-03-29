import { ADDING_NEW_ITEM, REMOVE_ITEM } from "./types";

const initialState = [
  {
    id: "0",
    name: "cucumber",
    price: 0.7,
    amount: 3,
    checked: false,
    section: "veggies",
  },
  {
    id: "1",
    name: "chicken breast",
    price: 8,
    amount: 0.4,
    checked: false,
    section: "meat",
  },
  {
    id: "2",
    name: "milk",
    price: 1.2,
    amount: 2,
    checked: true,
    section: "dairy",
  },
  {
    id: "3",
    name: "whole wheat bread",
    price: 3.2,
    amount: 1,
    checked: true,
    section: "breads",
  },
  {
    id: "4",
    name: "ham",
    price: 6,
    amount: 0.2,
    checked: true,
    section: "meat",
  },
  {
    id: "5",
    name: "bananas",
    price: 1,
    amount: 5,
    checked: false,
    section: "fruit",
  },
  {
    id: "6",
    name: "beer",
    price: 3,
    amount: 3,
    checked: false,
    section: "alcohol",
  },
];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADDING_NEW_ITEM:
      return [...state, payload];
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== payload); // payload === id
    default: {
      return state;
    }
  }
}
