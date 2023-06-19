import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Categories.css";
const Categories = ({ items, onDelete }) => {
    return (_jsx("div", { children: _jsxs("table", { className: "table table-bordered", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Description" }), _jsx("th", { scope: "col", children: "Amount" }), _jsx("th", { scope: "col", children: "Category" })] }) }), _jsxs("tbody", { children: [items.length !== 0 &&
                            items.map((item, index) => (_jsxs("tr", { children: [_jsx("td", { children: item.desc }), _jsx("td", { children: "$" + item.amount }), _jsx("td", { children: item.category }), _jsx("td", { children: _jsx("button", { className: "btn btn-outline-danger", onClick: () => {
                                                onDelete(index);
                                            }, children: "Delete" }) })] }, index))), items.length !== 0 && (_jsxs("tr", { children: [_jsx("td", { colSpan: 2, children: "Total" }), _jsxs("td", { colSpan: 2, children: ["$", items.reduce((acc, item) => {
                                            return acc + item.amount;
                                        }, 0)] })] }))] })] }) }));
};
export default Categories;
