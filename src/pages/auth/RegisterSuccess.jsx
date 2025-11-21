import { useLocation } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";
import { useState, useEffect } from "react";

export default function RegisterSuccess() {
  const { search } = useLocation();
  const expiresAt = new URLSearchParams(search).get("expires_in");
  const [countdown, setCountdown] = useState(0);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!expiresAt) return;

    const expiresDate = new Date(expiresAt).getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, expiresDate - now);

      setCountdown(diff);

      if (diff <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  useEffect(() => {
    const checkVerified = () => {
      if (localStorage.getItem("emailVerified") === "true") {
        setVerified(true);
        setCountdown(0);
      }
    };

    window.addEventListener("storage", checkVerified);
    checkVerified();

    return () => window.removeEventListener("storage", checkVerified);
  }, []);

  const minutes = Math.floor(countdown / 1000 / 60);
  const seconds = Math.floor((countdown / 1000) % 60);

  const pageTitle = verified
    ? "Email Verified! | Article Hub"
    : "Verify your email... | Article Hub";

  const headerText = verified
    ? "Your email has been verified!"
    : "Verify your email...";

  return (
    <PublicLayout title={pageTitle}>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="font-semibold text-6xl">{headerText}</h1>
        <div className="text-font-secondary mt-6">
          {verified ? (
            <p>You can close this tab or proceed to login.</p>
          ) : expiresAt && countdown > 0 ? (
            <p>
              Token expires in {minutes}m {seconds}s
            </p>
          ) : (
            <p>Token has expired. Please request a new verification email.</p>
          )}
        </div>
      </main>
    </PublicLayout>
  );
}
