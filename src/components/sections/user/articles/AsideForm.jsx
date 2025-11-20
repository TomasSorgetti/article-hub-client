export default function AsideForm({
  // categories,
  form,
  errors,
  handleChange,
  handleBlur,
  // handleToggleCategory,
}) {
  return (
    <div>
      <h2 className="font-bold text-2xl">Metadata</h2>
      {/* Slug */}
      <div className="relative mb-5">
        <label htmlFor="slug">Slug:</label>
        <input
          id="slug"
          type="text"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="my-first-article"
          className={`border rounded h-12 w-full p-2 ${
            errors.slug
              ? "border-red-500 bg-red-500/10 text-font-primary"
              : "border-border text-font-secondary"
          }`}
        />
        {errors.slug && (
          <p className="text-red-500 text-sm absolute -bottom-6 left-0">
            {errors.slug}
          </p>
        )}
      </div>
      {/* Tags */}
      <div className="relative mb-5">
        <label htmlFor="tags">Tags:</label>
        <input
          id="tags"
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="tag1, tag2, tag3"
          className="border rounded border-border h-12 w-full p-2 text-font-secondary"
        />
        {errors.tags && (
          <p className="text-red-500 text-sm absolute -bottom-6 left-0">
            {errors.tags}
          </p>
        )}
      </div>
      {/* Categories */}
      {/* <CategorySelector
        allCategories={categories}
        categories={form.categories}
        handleToggleCategory={handleToggleCategory}
      /> */}

      {/* Image */}
      <div className="relative mb-5">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          id="image"
          className="w-full p-2 text-font-secondary"
        />
      </div>
      {/* Summary */}
      <div className="relative mb-5">
        <label htmlFor="summary">Summary:</label>
        <textarea
          name="summary"
          id="summary"
          value={form.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Write something here..."
          className={`border rounded h-40 p-2 resize-none w-full  ${
            errors.summary
              ? "border-red-500 bg-red-500/10 text-font-primary"
              : "border-border text-font-secondary"
          }`}
        ></textarea>
        {errors.summary && (
          <p className="text-red-500 text-sm absolute -bottom-6 left-0">
            {errors.summary}
          </p>
        )}
      </div>
    </div>
  );
}
