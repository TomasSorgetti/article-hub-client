import { Routes, Route } from "react-router-dom";

import BlogDetailPage from "../pages/blog/BlogDetailPage";
import BlogPage from "../pages/blog/BlogPage";
import DocsPage from "../pages/DocsPage";
import HomePage from "../pages/HomePage";
import PricingPage from "../pages/PricingPage";

const publicRoutes = [
  { path: "", element: <HomePage /> },
  { path: "pricing", element: <PricingPage /> },
  { path: "docs", element: <DocsPage /> },
  { path: "blog", element: <BlogPage /> },
  { path: "blog/:blogId", element: <BlogDetailPage /> },
];

export default function PublicRoutes() {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
