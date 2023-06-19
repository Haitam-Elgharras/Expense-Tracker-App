import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { categories } from "../AppPriceTracker";
const FilterCategory = ({ onSelectCategory }) => {
    return (_jsx("div", { className: "mt-4", children: _jsxs("select", { name: "choice", id: "choice", onChange: (event) => {
                onSelectCategory(event.target.value);
            }, defaultValue: localStorage.getItem("selectedCategory") || "All", children: [_jsx("option", { value: "All", children: "All categories" }), categories.map((c) => (_jsx("option", { value: c, children: c }, c)))] }) }));
};
export default FilterCategory;
