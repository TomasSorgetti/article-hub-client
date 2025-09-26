import HomeHero from "../components/sections/home/HomeHero";
import PublicLayout from "../layouts/PublicLayout";

export default function HomePage() {
  return (
    <PublicLayout title="Home Page" description="Home Page">
      <HomeHero />
    </PublicLayout>
  );
}
