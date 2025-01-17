import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescrption] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);

    setDescrption("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescrption(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </>
  );
}
