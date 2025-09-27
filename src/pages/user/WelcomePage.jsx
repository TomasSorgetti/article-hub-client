import UserLayout from "../../layouts/UserLayout";
import { useAuthStore } from "../../lib/store/auth";

export default function WelcomePage() {
  const { user } = useAuthStore();

  return (
    <UserLayout title="Welcome Page" description="Welcome Page">
      <main className="mt-32">
        <h1>Welcome {user?.username}</h1>
      </main>
    </UserLayout>
  );
}
