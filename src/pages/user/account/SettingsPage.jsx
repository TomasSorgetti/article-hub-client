import { useEffect } from "react";
import TwoFactorAuthCard from "../../../components/ui/cards/TwoFactorAuthCard";
import UserSettingsCard from "../../../components/ui/cards/UserSettingsCard";
import UserLayout from "../../../layouts/UserLayout";
import { useSessionStore } from "../../../lib/store/sessions";
import SesisonCard from "../../../components/ui/cards/SessionCard";
import { useAuthStore } from "../../../lib/store/auth";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "../../../hooks/useGoogleLogin";

export default function SettingsPage() {
  const navigate = useNavigate();
  const { user, googleLogin } = useAuthStore();
  const { sessions, loadMySessions } = useSessionStore();

  useEffect(() => {
    if (!sessions || sessions.length === 0) {
      loadMySessions();
    }
  }, [loadMySessions, sessions]);

  const hasLoginMethod = (provider) =>
    user?.loginMethods?.some((m) => m.provider === provider);

  // Connect Google Account
  const { prompt } = useGoogleLogin({
    onSuccess: async ({ credential }) => {
      const rememberme = false;
      const { success } = await googleLogin({
        idToken: credential,
        rememberme,
      });
      if (!success) {
        // manejar error
      }
    },
    onError: (err) => {
      console.error("Google login error:", err);
    },
  });

  return (
    <UserLayout
      title="Account Settings | Article Hub – Control your preferences and security"
      description="Manage your personal preferences, security settings, and notifications. Keep your Article Hub account safe and customized to your needs."
    >
      <main className="container mx-auto px-4 py-32">
        <h1>Settings Page</h1>
        <div className="flex w-full space-x-4 mt-10">
          <div className="w-full flex-1">
            <h2 className="text-2xl font-semibold">Sign in</h2>
            <ul className="space-y-2 mt-4">
              <li>
                <UserSettingsCard
                  title="Password"
                  description={
                    hasLoginMethod("email")
                      ? `Has seteado una contraseña para la cuenta ${user?.email}`
                      : "Your password is not set."
                  }
                  handleClick={() => {
                    hasLoginMethod("email")
                      ? navigate("/user/account/change-password")
                      : navigate("/user/account/set-password");
                  }}
                  cta={
                    hasLoginMethod("email") ? `Change password` : "Set password"
                  }
                />
              </li>

              <li>
                <UserSettingsCard
                  title="Login with Google"
                  description={
                    hasLoginMethod("google")
                      ? `Esta cuenta está vinculada con Google.`
                      : "Esta cuenta no está vinculada con Google."
                  }
                  handleClick={() => {
                    hasLoginMethod("google")
                      ? navigate("/user/account/disconnect/google")
                      : prompt();
                  }}
                  cta={
                    hasLoginMethod("google")
                      ? `Disconnect with Google`
                      : "Connect with Google"
                  }
                />
              </li>

              <li>
                <UserSettingsCard
                  title="Login with GitHub"
                  description={
                    hasLoginMethod("github")
                      ? `Esta cuenta está vinculada con GitHub.`
                      : "Esta cuenta no está vinculada con GitHub."
                  }
                  handleClick={() => {
                    hasLoginMethod("github")
                      ? navigate("/user/account/disconnect/github")
                      : () => {
                          console.log("NOT_IMPLEMENTED");
                        };
                  }}
                  cta={
                    hasLoginMethod("github")
                      ? `Disconnect with GitHub`
                      : "Connect with GitHub"
                  }
                />
              </li>

              <li>
                <TwoFactorAuthCard />
              </li>
            </ul>
          </div>

          <div className="w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Sessions</h2>
              <button className="text-sm cursor-pointer text-red-400 underline">
                Delete all sessions
              </button>
            </div>
            <ul className="space-y-2 mt-4">
              {sessions &&
                sessions.map((session, index) => (
                  <li key={index}>
                    <SesisonCard
                      userAgent={session.userAgent}
                      ip={session.ip}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </main>
    </UserLayout>
  );
}
