import { Link } from "react-router-dom";
import UserLayout from "../../../layouts/UserLayout";
import { useArticlesStore } from "../../../lib/store/articles";
import { useEffect } from "react";
import ArticlesCard from "../../../components/ui/cards/ArticlesCard";

export default function MyArticlesPage() {
  const { loading, error, articles, loadMyArticles } = useArticlesStore();

  useEffect(() => {
    if (articles.length === 0) {
      loadMyArticles();
    }
  }, [loadMyArticles, articles.length]);

  return (
    <UserLayout title="My Articles Page" description="My Articles Page">
      <main className="mt-32 container mx-auto">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold">My Articles Page</h1>
          <Link to="/user/articles/add-new">New Article</Link>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {/* {!loading && articles.length === 0 && <p>No articles found.</p>} */}
        <section className="mt-8 flex flex-wrap gap-6">
          {articles?.map((article) => (
            <ArticlesCard
              key={article._id}
              title={article.title}
              summary={article.summary}
              date={article.createdAt}
              author={article.author}
            />
          ))}
        </section>
      </main>
    </UserLayout>
  );
}
