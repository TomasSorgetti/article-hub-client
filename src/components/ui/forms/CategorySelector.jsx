import { useState } from "react";

export default function CategorySelector({
  allCategories,
  categories,
  handleRemoveCategory = () => {},
  handleToggleCategory = () => {},
  handleAddCategory = () => {},
}) {
  const [newCategory, setNewCategory] = useState("");

  const handleChangeNewCategory = (e) => {
    setNewCategory(e.target.value);
  };

  return (
    <div>
      <span>Categories:</span>
      {/* Selected Categories */}
      <ul className="my-4 flex flex-wrap">
        {categories.length === 0 ? (
          <li className="text-sm text-font-secondary">Select a category.</li>
        ) : (
          categories.map((category) => (
            <li key={category._id}>
              <button
                onClick={() => handleRemoveCategory(category._id)}
                className="text-sm text-font-primary px-3 py-1 rounded-full bg-primary"
              >
                {category}
              </button>
            </li>
          ))
        )}
      </ul>

      {/* All Categories */}
      <ul className="my-4 flex flex-wrap">
        {allCategories.length === 0 ? (
          <li className="text-sm text-font-secondary">Select a category.</li>
        ) : (
          allCategories.map((category) => (
            <li
              key={category._id}
              className={`px-3 flex items-center gap-3 bg-border/60 py-1 rounded-full cursor-pointer ${categories.includes(
                category.id ? "bg-primary" : "bg-border/60"
              )}`}
            >
              <button className="text-sm uppercase">{category.name}</button>
              <button className="cursor-pointer">x</button>
            </li>
          ))
        )}
      </ul>

      {/* Add New Category */}
      <div>
        <label htmlFor="category" className="sr-only">
          Add a category
        </label>
        <div className="flex items-center gap-2 justify-between mt-2">
          <input
            type="text"
            id="category"
            name="category"
            className="w-full border border-border p-2 rounded"
            value={newCategory}
            placeholder="New category..."
            onChange={handleChangeNewCategory}
          />
          <button
            type="button"
            onClick={() => handleAddCategory(newCategory)}
            className="bg-white text-black px-6 py-2 rounded font-bold cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
