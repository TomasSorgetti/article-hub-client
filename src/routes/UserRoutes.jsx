import { Routes, Route } from "react-router-dom";
import PrivateGuard from "../components/guards/PrivateGuard";

import WelcomePage from "../pages/user/WelcomePage";
import GeneralSettings from "../pages/user/settings/GeneralSettings";
import ApiKeySettings from "../pages/user/settings/ApiKeySettings";
import ColaboratorsSettings from "../pages/user/settings/ColaboratorsSettings";
import IntegrationsSettings from "../pages/user/settings/IntegrationsSettings";
import WebhooksSettings from "../pages/user/settings/WebhooksSettings";

import MyArticlesPage from "../pages/user/articles/MyArticlesPage";
import CreateArticlePage from "../pages/user/articles/CreateArticlePage";
import UpdateArticlePage from "../pages/user/articles/UpdateArticlePage";
import ProfilePage from "../pages/user/account/ProfilePage";
import SettingsPage from "../pages/user/account/SettingsPage";

import BillingPage from "../pages/user/account/billing/BillingPage";
import BillingSuccessPage from "../pages/user/account/billing/BillingSuccessPage";
import BillingCancelPage from "../pages/user/account/billing/BillingCancelPage";

const userRoutes = [
  { path: "welcome", element: <WelcomePage /> },
  { path: "settings/:workbenchId/general", element: <GeneralSettings /> },
  { path: "settings/:workbenchId/api-key", element: <ApiKeySettings /> },
  {
    path: "settings/:workbenchId/colaborators",
    element: <ColaboratorsSettings />,
  },
  {
    path: "settings/:workbenchId/integrations",
    element: <IntegrationsSettings />,
  },
  { path: "settings/:workbenchId/webhooks", element: <WebhooksSettings /> },

  { path: ":workbenchId/articles", element: <MyArticlesPage /> },
  {
    path: ":workbenchId/articles/:articleSlug",
    element: <UpdateArticlePage />,
  },
  { path: ":workbenchId/articles/add-new", element: <CreateArticlePage /> },
  {
    path: ":workbenchId/articles/update/:articleSlug",
    element: <UpdateArticlePage />,
  },

  { path: "account/profile", element: <ProfilePage /> },
  { path: "account/settings", element: <SettingsPage /> },
  { path: "account/billing", element: <BillingPage /> },
  { path: "account/billing/success", element: <BillingSuccessPage /> },
  { path: "account/billing/cancel", element: <BillingCancelPage /> },
];

export default function UserRoutes() {
  return (
    <Routes>
      {userRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PrivateGuard>{element}</PrivateGuard>}
        />
      ))}
    </Routes>
  );
}
