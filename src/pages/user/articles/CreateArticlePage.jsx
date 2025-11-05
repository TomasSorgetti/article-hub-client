import { useState, useEffect } from "react";
import ArticleSelector from "../../../components/ui/forms/ArticleSelector";
import { useCategoriesStore } from "../../../lib/store/categories";
import UserLayout from "../../../layouts/UserLayout";
import Editor from "../../../components/ui/editor/Editor";
import AsideForm from "../../../components/sections/user/articles/AsideForm";

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
    <UserLayout
      title="New Article | Article Hub – Create and publish new content"
      description="Write, edit, and publish new articles directly from your Article Hub editor. Create high-quality blog posts and share them instantly through your API integration."
    >
      <main className="mt-32 container mx-auto">
        <form aria-label="Article creation form">
          <section className="w-full flex justify-between">
            <header className="w-full flex items-center justify-between lg:w-2/3">
              <h1 className="font-semibold text-3xl">Create Article Page</h1>
              <button
                type="button"
                disabled
                aria-label="Generate with AI (coming soon)"
                className="px-6 py-2 bg-linear-to-r from-tertiary  to-primary font-semibold text-white rounded cursor-not-allowed"
              >
                Generate with AI
              </button>
            </header>

            <div className="flex gap-6 items-center justify-end mr-6">
              <ArticleSelector state={form.state} handleChange={toggleState} />
              <button
                type="submit"
                aria-label="Save article"
                className="bg-white text-black px-6 py-2 rounded font-bold cursor-pointer"
              >
                Save
              </button>
            </div>
          </section>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            {/* article Content */}
            <section
              aria-labelledby="article-content"
              className="w-full lg:w-2/3"
            >
              <h2 id="article-content" className="sr-only">
                Article Content
              </h2>
              <label htmlFor="title" className="sr-only">
                Article Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Complete the title"
                name="title"
                onChange={handleChange}
                value={form.title}
                aria-required="true"
                className="border-b border-border h-12 w-full mb-10 p-2"
              />

              {/* Text Editor */}
              <div
                role="region"
                aria-label="Text editor"
                className="w-full h-full min-h-[400px]"
              >
                <Editor
                  onChange={handleEditorChange}
                  placeholder="Write something here..."
                />
              </div>
            </section>

            {/* Article Metadata */}
            <aside className="w-full lg:w-1/3 lg:px-8 space-y-4">
              <AsideForm
                categories={categories}
                form={form}
                handleChange={handleChange}
                handleToggleCategory={handleToggleCategory}
              />
            </aside>
          </div>
        </form>
      </main>
    </UserLayout>
  );
}
