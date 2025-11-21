import { Routes, Route } from "react-router-dom";
import AuthGuard from "../components/guards/AuthGuard";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import RegisterSuccess from "../pages/auth/RegisterSuccess";
import VerifyEmailPage from "../pages/auth/VerifyEmailPage";

const authRoutes = [
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
  { path: "register-success", element: <RegisterSuccess /> },
  { path: "verify-email", element: <VerifyEmailPage /> },
];

export default function AuthRoutes() {
  return (
    <Routes>
      {authRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<AuthGuard>{element}</AuthGuard>}
        />
      ))}
    </Routes>
  );
}
