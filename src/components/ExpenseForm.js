import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./ExpenseForm.css";
import { categories } from "../AppPriceTracker";
const schema = z.object({
    desc: z
        .string()
        .min(3, { message: "Description must be at least 3 characters" })
        .max(50),
    //the amount must be grater than 0
    amount: z
        .number({ invalid_type_error: "Amount is required" })
        .positive({ message: "Amount must be positive" })
        .min(0.01)
        .max(100_000),
    //he must select a category
    category: z.string().refine((value) => categories.includes(value), {
        message: "Category is required",
    }),
});
const Form = ({ onSubmit }) => {
    const { register, handleSubmit, reset, formState: { errors, isValid }, } = useForm({ resolver: zodResolver(schema) });
    return (_jsxs("form", { onSubmit: handleSubmit((data) => {
            onSubmit(data);
            reset();
        }), children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "desc", children: "Description" }), _jsx("input", { ...register("desc"), onSubmit: (e) => {
                            console.log(e.currentTarget);
                            e.currentTarget.value = "";
                        }, className: "form-control", type: "text", id: "desc", name: "desc" }), errors.desc && _jsx("p", { className: "text-danger", children: errors.desc.message })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "amount", children: "Amount" }), _jsx("input", { ...register("amount", { valueAsNumber: true }), onSubmit: (e) => (e.currentTarget.value = ""), type: "number", id: "amount", name: "amount", className: "form-control" }), errors.amount && (_jsx("p", { className: "text-danger", children: errors.amount.message }))] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "category", children: "Category" }), _jsxs("select", { ...register("category"), onSubmit: (e) => (e.currentTarget.value = ""), name: "category", className: "form-select", id: "category", children: [_jsx("option", { value: "" }), categories.map((c) => (_jsx("option", { value: c, children: c }, c)))] }), errors.category && (_jsxs("p", { className: "text-danger", children: [errors.category.message, " "] }))] }), _jsx("input", { type: "submit", className: "btn btn-primary", value: "Add Expense" })] }));
};
export default Form;
