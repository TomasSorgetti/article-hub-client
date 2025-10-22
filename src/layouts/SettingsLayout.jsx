import Navbar from "../components/Navbar";
import UserBar from "../components/UserBar";
import WorkspaceSettingsBar from "../components/WorkspaceSettingsBar";

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
      {/* <Footer /> */}
    </>
  );
}
