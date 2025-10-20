import { useEffect } from "react";
import TwoFactorAuthCard from "../../../components/ui/cards/TwoFactorAuthCard";
import UserSettingsCard from "../../../components/ui/cards/UserSettingsCard";
import UserLayout from "../../../layouts/UserLayout";
import { useSessionStore } from "../../../lib/store/sessions";
import SesisonCard from "../../../components/ui/cards/SessionCard";

export default function SettingsPage() {
  const { sessions, loadMySessions } = useSessionStore();

  useEffect(() => {
    if (!sessions || sessions.length === 0) {
      loadMySessions();
    }
  }, [loadMySessions, sessions]);

  return (
    <UserLayout title="Settings Page" description="Settings Page">
      <main className="container mx-auto px-4 py-32">
        <h1>Settings Page</h1>
        <div className="flex w-full space-x-4 mt-10">
          <div className="w-full flex-1">
            <h2 className="text-2xl font-semibold">Sign in</h2>
            <ul className="space-y-2 mt-4">
              <li>
                <UserSettingsCard
                  title="Password"
                  description="Has seteado una contraseña para la cuenta tomassorgetti456@gmail.com"
                  href="#"
                  cta="Change password"
                />
              </li>

              <li>
                <UserSettingsCard
                  title="Login with Google"
                  description="Esta cuenta no está vinculada con Google."
                  href="#"
                  cta="Connect with Google"
                />
              </li>
              <li>
                <UserSettingsCard
                  title="Login with GitHub"
                  description="Esta cuenta no está vinculada con GitHub."
                  href="#"
                  cta="Connect with GitHub"
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
