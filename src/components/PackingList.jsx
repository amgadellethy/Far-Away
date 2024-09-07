import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onPackedItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;
  if (sortBy === "input") sortItems = items;
  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              deleteItem={onDeleteItem}
              packedItem={onPackedItem}
            />
          ))}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">sorted by input order</option>
            <option value="description">sorted by description</option>
            <option value="packed">sorted by packed items</option>
          </select>
          <button onClick={onClearItem}>Clear List</button>
        </div>
      </div>
    </>
  );
}
