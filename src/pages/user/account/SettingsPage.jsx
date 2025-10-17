import TwoFactorAuthCard from "../../../components/ui/cards/TwoFactorAuthCard";
import UserSettingsCard from "../../../components/ui/cards/UserSettingsCard";
import UserLayout from "../../../layouts/UserLayout";

export default function SettingsPage() {
  return (
    <UserLayout title="Settings Page" description="Settings Page">
      <main className="container mx-auto px-4 py-32">
        <h1>Settings Page</h1>
        <div>
          <h2>Inicio de sesión</h2>
          <ul className="flex flex-col gap-2">
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
      </main>
    </UserLayout>
  );
}
