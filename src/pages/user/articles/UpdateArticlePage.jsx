import UserLayout from "../../../layouts/UserLayout";

export default function UpdateArticlePage() {
  const articleTitle = "Article Name";
  return (
    <UserLayout
      title={`${articleTitle} | Article Hub – View your article details and content`}
      description={`Read and manage "${articleTitle}" directly from your Article Hub dashboard. View the full content, metadata, and publication status of your article.`}
    >
      <h1>Update Article Page</h1>
    </UserLayout>
  );
}
