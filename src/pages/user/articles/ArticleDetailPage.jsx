import { useEffect } from "react";
import UserLayout from "../../../layouts/UserLayout";
import { useArticlesStore } from "../../../lib/store/articles";
import { useParams } from "react-router-dom";

export default function ArticleDetailPage() {
  const { articleSlug } = useParams();
  const { article, loadArticle } = useArticlesStore();

  useEffect(() => {
    if (!article || article.slug !== articleSlug) {
      loadArticle(articleSlug);
    }
  }, [article, loadArticle, articleSlug]);

  return (
    <UserLayout
      title={`Edit ${
        article.title || "Article"
      } | Article Hub – Update and republish your article`}
      description={`Edit and improve "${
        article.title || "Article"
      }" in Article Hub. Update its content, tags, and settings, then republish instantly through your API integration.`}
    >
      <h1 className="text-white mt-32">Article Detail Page{article?.title}</h1>
      <pre>{JSON.stringify(article, null, 2)}</pre>
    </UserLayout>
  );
}
