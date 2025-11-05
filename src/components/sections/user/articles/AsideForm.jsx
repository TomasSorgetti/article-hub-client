import CategorySelector from "../../../ui/forms/CategorySelector";

export default function AsideForm({ categories, form, handleChange, handleToggleCategory }) {
  return (
    <div>
      <h2 className="font-bold text-2xl">Metadata</h2>
      {/* Slug */}
      <div className="mb-4">
        <label htmlFor="slug">Slug:</label>
        <input
          id="slug"
          type="text"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          placeholder="my-first-article"
          className="border rounded border-border h-12 w-full p-2 text-font-secondary"
        />
      </div>
      {/* Tags */}
      <div className="mb-4">
        <label htmlFor="tags">Tags:</label>
        <input
          id="tags"
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="tag1, tag2, tag3"
          className="border rounded border-border h-12 w-full p-2 text-font-secondary"
        />
      </div>
      {/* Categories */}
      <CategorySelector
        allCategories={categories}
        categories={form.categories}
        handleToggleCategory={handleToggleCategory}
      />

      {/* Image */}
      <div className="mb-4">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          id="image"
          className="w-full p-2 text-font-secondary"
        />
      </div>
      {/* Summary */}
      <div className="mb-4">
        <label htmlFor="summary">Summary:</label>
        <textarea
          name="summary"
          id="summary"
          value={form.summary}
          onChange={handleChange}
          placeholder="Write something here..."
          className="border rounded border-border h-40 p-2 resize-none w-full text-font-secondary"
        ></textarea>
      </div>
    </div>
  );
}
