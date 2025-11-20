import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
// import UserBar from "../components/ui/UserBar";

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

      <Footer />
    </>
  );
}
