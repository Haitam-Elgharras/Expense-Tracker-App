import { categories } from "../AppPriceTracker";

interface FilterCategoryProps {
  onSelectCategory: (category: string) => void;
}
const FilterCategory = ({ onSelectCategory }: FilterCategoryProps) => {
  return (
    <div className="mt-4">
      <select
        name="choice"
        id="choice"
        onChange={(event) => {
          onSelectCategory(event.target.value);
        }}
        defaultValue={localStorage.getItem("selectedCategory") || "All"}
      >
        <option value="All">All categories</option>
        {categories.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FilterCategory;
