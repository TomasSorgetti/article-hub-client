import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UserLayout from "../../../layouts/UserLayout";
import { useArticlesStore } from "../../../lib/store/articles";
import { useEffect } from "react";
import ArticlePrivateCard from "../../../components/ui/cards/ArticlePrivateCard";
import { ArrowLeft, Settings } from "lucide-react";

export default function MyArticlesPage() {
  const { workbenchId } = useParams();
  const { loading, articles, loadMyArticles, clearArticles } =
    useArticlesStore();

  useEffect(() => {
    if (workbenchId) {
      loadMyArticles(workbenchId);
    }

    return () => {
      clearArticles();
    };
  }, [workbenchId, loadMyArticles, clearArticles]);

  return (
    <UserLayout
      title="Articles | Article Hub – Manage your blog content in one place"
      description="View, edit, and organize all your articles from one dashboard. Keep your content structured and ready to publish through your Article Hub workspace."
    >
      <main className="my-32 container mx-auto">
        <div className="w-full flex items-end justify-between">
          <div>
            <Link
              to="/user/welcome"
              className="flex items-center gap-2 text-font-secondary hover:text-font-primary"
            >
              <ArrowLeft />
              Go back
            </Link>
            <h1 className="text-3xl font-bold mt-2">My Articles Page</h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={`/user/settings/${workbenchId}/general`}
              className="text-font-secondary flex items-center gap-2 border border-border px-4 py-2 rounded"
            >
              <Settings size={18} className="text-font-secondary" />
              Settings
            </Link>
            <Link
              to={`/user/${workbenchId}/articles/add-new`}
              className="px-4 py-2 rounded bg-white text-background font-semibold"
            >
              New Article
            </Link>
          </div>
        </div>

        {loading && <p>Loading...</p>}
        {!loading && articles.length === 0 && (
          <p className="mt-20 text-font-secondary">No articles found.</p>
        )}
        <section className="mt-16 flex flex-wrap gap-6">
          {articles?.map((article) => (
            <ArticlePrivateCard
              key={article._id}
              title={article.title}
              summary={article.summary}
              date={article.createdAt}
              author={article.author}
              categories={article.categories}
              slug={article.slug}
              views={article.views}
              status={article.status}
              workbenchId={workbenchId}
            />
          ))}
        </section>
      </main>
    </UserLayout>
  );
}
