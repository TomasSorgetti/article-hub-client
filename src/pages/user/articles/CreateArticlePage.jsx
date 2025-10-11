import { useState, useEffect } from "react";
import ArticleSelector from "../../../components/ui/forms/ArticleSelector";
import { useCategoriesStore } from "../../../lib/store/categories";
import UserLayout from "../../../layouts/UserLayout";
import Editor from "../../../components/ui/editor/Editor";
import CategorySelector from "../../../components/ui/forms/CategorySelector";

export default function CreateArticlePage() {
  const { categories, loadMyCategories } = useCategoriesStore();

  const [form, setForm] = useState({
    title: "",
    content: "",
    slug: "",
    tags: "",
    summary: "",
    categories: [],
    state: "published",
  });

  useEffect(() => {
    if (categories.length === 0) {
      loadMyCategories();
    }
  }, [loadMyCategories, categories.length]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleState = () => {
    setForm({
      ...form,
      state:
        form.state === "published"
          ? "draft"
          : form.state === "draft"
          ? "archived"
          : "published",
    });
  };

  const handleToggleCategory = (category) => {
    if (form.categories.includes(category.id)) {
      setForm({
        ...form,
        categories: form.categories.filter((cat) => cat !== category.id),
      });
    } else {
      setForm({
        ...form,
        categories: [...form.categories, category.id],
      });
    }
  };

  const handleEditorChange = (html) => {
    console.log("Contenido:", html);
  };

  return (
    <UserLayout title="Create Article Page" description="Create Article Page">
      <main className="mt-32 container mx-auto">
        <form action="#">
          <div className="w-full flex justify-between">
            <h1>Create Article Page</h1>
            <div className="flex gap-4 items-center">
              <ArticleSelector state={form.state} handleChange={toggleState} />
              <button className="bg-white text-black px-6 py-2 rounded font-bold cursor-pointer">
                Save
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            {/* article Content */}
            <div className="w-full lg:w-2/3">
              <input
                type="text"
                placeholder="Complete the title"
                name="title"
                onChange={handleChange}
                value={form.title}
                className="border-b border-border h-12 w-full mb-10 p-2"
              />

              {/* Text Editor */}
              <div className="w-full h-full min-h-[400px]">
                <Editor
                  onChange={handleEditorChange}
                  placeholder="Write something here..."
                />
              </div>
            </div>

            {/* Article Metadata */}
            <div className="w-full lg:w-1/3 lg:px-8 space-y-4">
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
          </div>
        </form>
      </main>
    </UserLayout>
  );
}
