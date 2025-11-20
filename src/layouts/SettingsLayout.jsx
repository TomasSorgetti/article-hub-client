import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import UserBar from "../components/ui/UserBar";
import WorkspaceSettingsBar from "../components/ui/WorkspaceSettingsBar";

export default function SettingsLayout({
  title = "ArticleHub",
  description = "",
  children,
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <Navbar />

      <div className="w-full container mx-auto max-w-7xl flex pt-32">
        <WorkspaceSettingsBar />
        {children}
      </div>

      <Footer />
    </>
  );
}
