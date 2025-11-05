import { Route, Routes } from "react-router-dom";

import NotFoundPage from "./pages/error/NotFoundPage";

import PublicRoutes from "./routes/PublicRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import ErrorRoutes from "./routes/ErrorRoutes";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />

      <Route path="/error/*" element={<ErrorRoutes />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
