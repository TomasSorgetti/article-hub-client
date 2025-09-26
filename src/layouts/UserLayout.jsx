import Navbar from "../components/Navbar";

export default function UserLayout({
  title = "ArticleHub",
  description = "",
  children,
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <Navbar />
      {/* <UserBar /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
