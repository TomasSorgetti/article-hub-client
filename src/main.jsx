import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import NotificationsProvider from "./providers/NotificationsProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <HelmetProvider>
      <AuthProvider>
        <NotificationsProvider>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <App />
          </GoogleOAuthProvider>
        </NotificationsProvider>
      </AuthProvider>
    </HelmetProvider>
  </BrowserRouter>
  // </StrictMode>
);
