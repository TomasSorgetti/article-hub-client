import { Routes, Route } from "react-router-dom";
import AdminGuard from "../components/guards/AdminGuard";

import DashboardPage from "../pages/admin/DashboardPage";

const adminRoutes = [{ path: "", element: <DashboardPage /> }];

/**
 * Todo guard
 *
 */
export default function AdminRoutes() {
  return (
    <Routes>
      {adminRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<AdminGuard>{element}</AdminGuard>}
        />
      ))}
    </Routes>
  );
}
