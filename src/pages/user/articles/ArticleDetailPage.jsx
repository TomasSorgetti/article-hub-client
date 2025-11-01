import UserLayout from "../../../layouts/UserLayout";

export default function ArticleDetailPage() {
  const articleTitle = "Article Name";
  return (
    <UserLayout
      title={`Edit ${articleTitle} | Article Hub – Update and republish your article`}
      description={`Edit and improve "${articleTitle}" in Article Hub. Update its content, tags, and settings, then republish instantly through your API integration.`}
    >
      <h1>Article Detail Page</h1>
    </UserLayout>
  );
}
