import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/groceries/actions";
import {
  getAverage,
  getBoughtGroceries,
  getGroceries,
  getGroceriesBySection,
  getTotalPrice,
} from "../../store/groceries/selector";
import { toggleFavorite } from "../../store/user/actions";
import "./groceries.css";

export const Sections = () => {
  const dispatch = useDispatch();

  const [section, setSection] = useState("");
  const [amountLess, setAmountLess] = useState(0);
  const [amountMore, setAmountMore] = useState(0);

  const groceries = useSelector(
    getGroceriesBySection(section, amountLess, amountMore)
  );

  console.log(groceries);

  return (
    <div className="container">
      <select
        onChange={(e) => {
          setSection(e.target.value);
        }}
      >
        <option value="">select</option>
        <option value="veggies">veggies</option>
        <option value="dairy">dairy</option>
        <option value="meat">meat</option>
        <option value="fruit">fruit</option>
        <option value="breads">breads</option>
        <option value="alcohol">alcohol</option>
      </select>
      <label htmlFor="amountLess">Less than</label>
      <input
        name="amountLess"
        type="number"
        value={amountLess}
        onChange={(e) => setAmountLess(e.target.value)}
      />
      <label htmlFor="amountMore">More than</label>
      <input
        name="amountMore"
        type="number"
        value={amountMore}
        onChange={(e) => setAmountMore(e.target.value)}
      />
      <h1>Sections</h1>
      <div>
        <h2>My list</h2>
        {groceries.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>Amount: {item.amount}</p>
            <p>Total Price: {(item.amount * item.price).toFixed(2)}</p>
            <button onClick={() => dispatch(toggleFavorite(item.id))}>
              {item.favorite ? "♥" : "♡"}
            </button>{" "}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove Item
            </button>
          </div>
        ))}
        {groceries.length === 0 && <p>No items were found</p>}
      </div>
    </div>
  );
};
