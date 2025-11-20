import { useEffect, useState } from "react";
import UserLayout from "../../../layouts/UserLayout";
import { useArticlesStore } from "../../../lib/store/articles";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoriesStore } from "../../../lib/store/categories";
import ArticleSelector from "../../../components/ui/forms/ArticleSelector";
import Editor from "../../../components/ui/editor/Editor";
import AsideForm from "../../../components/sections/user/articles/AsideForm";
import { Trash } from "lucide-react";
import {
  articleValidators,
  validateArticleForm,
} from "../../../lib/validators/article.validator";

export default function UpdateArticlePage() {
  const navigate = useNavigate();
  const { articleSlug, workbenchId } = useParams();
  const {
    article,
    loadArticle,
    loading: loadingUpdateArticle,
    deleteArticle,
  } = useArticlesStore();
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

  useEffect(() => {
    if (!article || article.slug !== articleSlug) {
      loadArticle(articleSlug);
    }
  }, [article, loadArticle, articleSlug]);

  useEffect(() => {
    if (article) {
      setForm({
        title: article.title,
        content: article.content,
        slug: article.slug,
        tags: article.tags,
        summary: article.summary,
        categories: article.categories,
        state: article.state,
      });
    }
  }, [article]);

  const handleChange = (event) => {
    setErrors({
      ...errors,
      [event.target.name]: "",
    });
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
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
    console.log(html);

    setForm({
      ...form,
      content: html,
    });
  };

  const handleUpdateArticle = async (event) => {
    event.preventDefault();

    const { isValid, errors: newErrors } = validateArticleForm(form);
    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    // TODO update article
  };

  const handleDeleteArticle = async (event) => {
    event.preventDefault();
    const { success } = await deleteArticle(article._id);

    if (success) navigate(`/user/${workbenchId}/articles`);
  };

  return (
    <UserLayout
      title={`Edit ${
        article.title || "Article"
      } | Article Hub – Update and republish your article`}
      description={`Edit and improve "${
        article.title || "Article"
      }" in Article Hub. Update its content, tags, and settings, then republish instantly through your API integration.`}
    >
      <main className="my-32 container mx-auto">
        <form onSubmit={handleUpdateArticle} aria-label="Article creation form">
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
                aria-disabled={loadingUpdateArticle}
                disabled={loadingUpdateArticle}
                className={`bg-white text-black px-6 py-2 rounded font-bold ${
                  loadingUpdateArticle
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                Save
              </button>
              <button
                type="button"
                aria-label="Delete article"
                onClick={handleDeleteArticle}
                className="cursor-pointer"
              >
                <Trash className="w-6 h-6 text-red-500" />
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
                  content={form.content}
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
