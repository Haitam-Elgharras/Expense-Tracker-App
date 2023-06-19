import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ExpenseForm, ExpenseList, ExpenseFilter } from "./components";
import produce from "immer";
export const categories = ["Groceries", "Utilities", "Entertainment"];
const AppPriceTracker = () => {
    // localStorage.removeItem("items");
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items") || "[]"));
    const onSubmit = (data) => {
        const newItem = {
            desc: data.desc,
            amount: data.amount,
            category: data.category,
        };
        const newItems = [...items, newItem];
        localStorage.setItem("items", JSON.stringify(newItems));
        setItems(newItems);
    };
    const handleDelete = async (index) => {
        setItems(produce((draft) => draft.filter((e, i) => index !== i)));
    };
    localStorage.setItem("items", JSON.stringify(items)); //update the local storage after deleting
    const [category, setCategory] = useState(localStorage.getItem("selectedCategory") || "All");
    localStorage.setItem("selectedCategory", category);
    const newData = category === "All"
        ? items
        : items.filter((item) => item.category === category);
    //filter depending on the category we recieve
    const handleSelect = (category) => {
        setCategory(category);
    };
    return (_jsxs("div", { children: [_jsx(ExpenseForm, { onSubmit: onSubmit }), _jsx(ExpenseFilter, { onSelectCategory: handleSelect }), _jsx(ExpenseList, { items: newData, onDelete: handleDelete })] }));
};
export default AppPriceTracker;
