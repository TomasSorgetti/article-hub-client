import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

const FRONT_URI = import.meta.env.VITE_FRONT_URI || "http://localhost:5173";

export default function PublicLayout({
  title = "Article Hub",
  description = "Create, manage and share your blog as a SaaS.",
  canonical = "/",
  robots = "index, follow",
  url = `${FRONT_URI}${canonical}`,
  image = "/ogimage.webp",
  structuredData = null,
  children,
}) {
  const ogImage = `${FRONT_URI}${image}`;

  return (
    <>
      <Helmet>
        {/* Basic Meta */}
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content={robots} />
        <link rel="icon" type="image/svg+xml" href="/AHub.svg" />
        <link rel="canonical" href={url} />
        <meta name="author" content="Article Hub" />
        <meta name="copyright" content="Article Hub" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Article Hub" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>

      <Navbar />
      {children}
    </>
  );
}
