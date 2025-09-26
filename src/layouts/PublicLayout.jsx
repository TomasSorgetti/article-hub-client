import Navbar from "../components/Navbar";

export default function PublicLayout({ title, description, children }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <Navbar />
      {children}
    </>
  );
}
