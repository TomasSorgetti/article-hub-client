import { useEffect, useState } from "react";
import PublicLayout from "../../layouts/PublicLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { VerifyEmail, ResendVerification } from "../../services/auth";

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const token = new URLSearchParams(search).get("token");

  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!token) {
      setStatus("no-token");
      return;
    }

    async function verify() {
      const { error } = await VerifyEmail(token);

      if (error) {
        setError(error);
        setStatus("error");
        return;
      }

      setStatus("success");
      localStorage.setItem("emailVerified", "true");

      const timer = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        localStorage.removeItem("emailVerified");
        navigate("/auth/login");
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    }

    verify();
  }, [token, navigate]);

  return (
    <PublicLayout title="Verify Email">
      <main className="my-32 min-h-[60vh] container mx-auto text-center flex flex-col items-center justify-center">
        {status === "loading" && (
          <>
            <h1 className="text-5xl font-semibold">Verifying your email…</h1>
            <p className="mt-4 text-font-secondary">Please wait.</p>
            <div className="spinner mt-8" />
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-5xl font-semibold text-green-600">
              Your email has been verified!
            </h1>
            <p className="mt-6 text-font-secondary">
              Redirecting to login in {countdown}...
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-4xl font-semibold text-red-600">
              Verification failed
            </h1>
            <p className="mt-4 text-font-secondary">{error}</p>
            <div className="flex gap-6 mt-10">
              <button
                className="btn-primary"
                onClick={() => navigate("/auth/login")}
              >
                Go to Login
              </button>

              <button
                className="btn-secondary"
                onClick={async () => {
                  await ResendVerification();
                  alert("Verification email sent again.");
                }}
              >
                Resend verification email
              </button>
            </div>
          </>
        )}

        {status === "no-token" && (
          <>
            <h1 className="text-4xl font-semibold">
              No verification link detected
            </h1>
            <p className="mt-4 text-font-secondary">
              Submit registration again or check your email.
            </p>
            <button
              className="btn-primary mt-10"
              onClick={() => navigate("/auth/login")}
            >
              Go to Login
            </button>
          </>
        )}
      </main>
    </PublicLayout>
  );
}
