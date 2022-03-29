import { useState } from "react";
import { Sections, Favorites, Form, Groceries, Market } from "./components";

function App() {
  const [tab, setTab] = useState("groceries");

  return (
    <div className='App'>
      {/* <Balance /> */}
      <div>
        <button onClick={() => setTab("groceries")}>Groceries</button>
        <button onClick={() => setTab("form")}>Form</button>
        <button onClick={() => setTab("sections")}>Sections</button>
        <button onClick={() => setTab("favorites")}>Favorites</button>
        <button onClick={() => setTab("market")}>Super markets</button>
      </div>
      {tab === "groceries" && <Groceries />}
      {tab === "form" && <Form />}
      {tab === "favorites" && <Favorites />}
      {tab === "sections" && <Sections />}
      {tab === "market" && <Market />}
    </div>
  );
}

export default App;

