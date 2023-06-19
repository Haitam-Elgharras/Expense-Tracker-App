import { useState } from "react";
import { ExpenseForm, ExpenseList, ExpenseFilter } from "./components";
import { FieldValues } from "react-hook-form";
import produce from "immer";

interface Item {
  desc: string;
  amount: number;
  category: string;
}

export const categories = ["Groceries", "Utilities", "Entertainment"];

const AppPriceTracker = () => {
  // localStorage.removeItem("items");
  const [items, setItems] = useState<Item[]>(
    JSON.parse(localStorage.getItem("items") || "[]")
  );

  const onSubmit = (data: FieldValues) => {
    const newItem: Item = {
      desc: data.desc,
      amount: data.amount,
      category: data.category,
    };
    const newItems = [...items, newItem];
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  };

  const handleDelete = async (index: number) => {
    setItems(produce((draft) => draft.filter((e, i) => index !== i)));
  };
  localStorage.setItem("items", JSON.stringify(items)); //update the local storage after deleting

  const [category, setCategory] = useState(
    localStorage.getItem("selectedCategory") || "All"
  );
  localStorage.setItem("selectedCategory", category);
  const newData =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  //filter depending on the category we recieve
  const handleSelect = (category: string) => {
    setCategory(category);
  };

  return (
    <div>
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseFilter onSelectCategory={handleSelect} />
      <ExpenseList items={newData} onDelete={handleDelete} />
    </div>
  );
};

export default AppPriceTracker;
