import UserLayout from "../../layouts/UserLayout";
import { useAuthStore } from "../../lib/store/auth";

export default function WelcomePage() {
  const { user } = useAuthStore();

  return (
    <UserLayout title="Welcome Page" description="Welcome Page">
      <main className="mt-32 container mx-auto">
        <h1 className="text-3xl font-bold">Welcome {user?.username}</h1>
      </main>
    </UserLayout>
  );
}
