import HomeBento from "../components/sections/home/HomeBento";
import HomeHero from "../components/sections/home/HomeHero";
import PublicLayout from "../layouts/PublicLayout";

export default function HomePage() {
  return (
    <PublicLayout
      title="Article Hub | Create, manage and share your blog as a SaaS"
      description="Article Hub lets you create and publish articles that integrate seamlessly into your own website through an API. Manage all your blog content in one place and keep your unique style across every project."
    >
      <HomeHero />
      <HomeBento />
    </PublicLayout>
  );
}
