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

type ExpenseFormData = z.infer<typeof schema>;
interface FormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div>
        <label htmlFor="desc">Description</label>
        <input
          {...register("desc")}
          onSubmit={(e) => {
            console.log(e.currentTarget);
            e.currentTarget.value = "";
          }}
          className="form-control"
          type="text"
          id="desc"
          name="desc"
        />
        {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          onSubmit={(e) => (e.currentTarget.value = "")}
          type="number"
          id="amount"
          name="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          {...register("category")}
          onSubmit={(e) => (e.currentTarget.value = "")}
          name="category"
          className="form-select"
          id="category"
        >
          <option value=""></option>
          {categories.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message} </p>
        )}
      </div>
      <input type="submit" className="btn btn-primary" value="Add Expense" />
    </form>
  );
};

export default Form;
