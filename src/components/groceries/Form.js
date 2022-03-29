import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/groceries/actions";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const [nameError, setNameError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (name === "" || amount <= 0 || price <= 0) {
    //   setError("Some fields are missing");
    //   return;
    // }

    if (name === "") {
      setNameError("Name is required");
      return;
    }

    if (amount === 0) {
      setAmountError("Amount is required");
      return;
    }

    dispatch(
      addItem({
        id: uuidv4(),
        name,
        amount,
        price,
        checked: false,
      })
    );
    setSuccess(true);
    setNameError("");
    setAmountError("");
    // setName("");
    setAmount(0);
    setPrice(0);
  };

  return (
    <div>
      <h1>Add new entry</h1>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p>{nameError}</p>}
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {amountError && <p>{amountError}</p>}
          <label htmlFor="pricePerUnit">Price per unit</label>
          <input
            name="pricePerUnit"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <p>Success! you added {name}</p>
          <button>Go to groceries</button>
        </>
      )}
    </div>
  );
};
