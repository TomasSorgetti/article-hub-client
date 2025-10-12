import { Route, Routes } from "react-router-dom";
// Public
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import DocsPage from "./pages/DocsPage";
import BlogPage from "./pages/blog/BlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";

// Auth
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";

// User
import WelcomePage from "./pages/user/WelcomePage";
import WorkspacePage from "./pages/user/WorkspacePage";
import MyArticlesPage from "./pages/user/articles/MyArticlesPage";
import ArticleDetailPage from "./pages/user/articles/ArticleDetailPage";
import CreateArticlePage from "./pages/user/articles/CreateArticlePage";
import UpdateArticlePage from "./pages/user/articles/UpdateArticlePage";
import ProfilePage from "./pages/user/account/ProfilePage";
import SettingsPage from "./pages/user/account/SettingsPage";

// Admin
import DashboardPage from "./pages/admin/DashboardPage";
import NotFoundPage from "./pages/error/NotFoundPage";
import UnauthorizedPage from "./pages/error/UnauthorizedPage";
import ServerDownPage from "./pages/error/ServerDownPage";

import BillingPage from "./pages/user/account/billing/BillingPage";
import BillingSuccessPage from "./pages/user/account/billing/BillingSuccessPage";
import BillingCancelPage from "./pages/user/account/billing/BillingCancelPage";
import BillingPlansPage from "./pages/user/account/billing/BillingPlansPage";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:blogId" element={<BlogDetailPage />} />

      {/* Auth routes */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/verify" element={<VerifyEmailPage />} />

      {/* User private routes */}
      <Route path="/user/welcome" element={<WelcomePage />} />
      <Route path="/user/workbench/:workbenchId" element={<WorkspacePage />} />
      <Route path="/user/articles" element={<MyArticlesPage />} />
      <Route path="/user/articles/:articleId" element={<ArticleDetailPage />} />
      <Route path="/user/articles/add-new" element={<CreateArticlePage />} />
      <Route
        path="/user/articles/update/:articleId"
        element={<UpdateArticlePage />}
      />

      <Route path="/user/account/profile" element={<ProfilePage />} />
      <Route path="/user/account/settings" element={<SettingsPage />} />
      <Route path="/user/account/billing" element={<BillingPage />} />
      <Route
        path="/user/account/billing/success"
        element={<BillingSuccessPage />}
      />
      <Route
        path="/user/account/billing/cancel"
        element={<BillingCancelPage />}
      />
      <Route
        path="/user/account/billing/plans"
        element={<BillingPlansPage />}
      />

      {/* Admin private routes */}
      <Route path="/admin" element={<DashboardPage />} />

      {/* Error routes */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/403" element={<UnauthorizedPage />} />
      <Route path="/500" element={<ServerDownPage />} />
    </Routes>
  );
}
