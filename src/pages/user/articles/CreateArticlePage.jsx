import { useState, useEffect } from "react";
import ArticleSelector from "../../../components/ui/forms/ArticleSelector";
import { useCategoriesStore } from "../../../lib/store/categories";
import UserLayout from "../../../layouts/UserLayout";
import Editor from "../../../components/ui/editor/Editor";
import AsideForm from "../../../components/sections/user/articles/AsideForm";
import { useNavigate, useParams } from "react-router-dom";
import { useArticlesStore } from "../../../lib/store/articles";
import {
  articleValidators,
  validateArticleForm,
} from "../../../lib/validators/article.validator";

export default function CreateArticlePage() {
  const navigate = useNavigate();
  const { workbenchId } = useParams();
  const { categories, loadMyCategories } = useCategoriesStore();
  const { createArticle, loading: loadingCreateArticle } = useArticlesStore();

  const [form, setForm] = useState({
    title: "",
    content: "",
    slug: "",
    tags: "",
    summary: "",
    categories: [],
    state: "published",
  });

  const [errors, setErrors] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
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

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const message = articleValidators[name]?.(value) || "";

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
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
    setForm({
      ...form,
      content: html,
    });
  };

  const handleCreateArticle = async (event) => {
    event.preventDefault();

    const { isValid, errors: newErrors } = validateArticleForm(form);
    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    if (!workbenchId) {
      return;
    }

    const data = { ...form, workbench: workbenchId };

    const { success } = await createArticle(data);

    if (success) {
      setForm({
        title: "",
        content: "",
        slug: "",
        tags: "",
        summary: "",
        categories: [],
        state: "published",
      });

      navigate(`/user/${workbenchId}/articles`);
    }
  };

  return (
    <UserLayout
      title="New Article | Article Hub – Create and publish new content"
      description="Write, edit, and publish new articles directly from your Article Hub editor. Create high-quality blog posts and share them instantly through your API integration."
    >
      <main className="my-32 container mx-auto">
        <form onSubmit={handleCreateArticle} aria-label="Article creation form">
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
                aria-disabled={loadingCreateArticle}
                disabled={loadingCreateArticle}
                className={`bg-white text-black px-6 py-2 rounded font-bold ${
                  loadingCreateArticle
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
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
              <div className="relative mb-10">
                <label htmlFor="title" className="sr-only">
                  Article Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Complete the title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.title}
                  aria-required="true"
                  className={`border-b h-12 w-full p-2 ${
                    errors.title ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm absolute -bottom-6 left-0">
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Text Editor */}
              <div
                role="region"
                aria-label="Text editor"
                className="w-full h-full min-h-[400px]"
              >
                <Editor
                  handleBlur={handleBlur}
                  handleChange={handleEditorChange}
                  error={errors.content}
                  placeholder="Write something here..."
                />
              </div>
            </section>

            {/* Article Metadata */}
            <aside className="w-full lg:w-1/3 lg:px-8 space-y-4">
              <AsideForm
                categories={categories}
                form={form}
                errors={errors}
                handleBlur={handleBlur}
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
