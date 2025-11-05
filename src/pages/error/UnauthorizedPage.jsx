import PublicLayout from "../../layouts/PublicLayout";

export default function UnauthorizedPage() {
  return (
    <PublicLayout title="Unauthorized Page" description="Unauthorized Page">
      <main className="mt-40">
        <h1>Unauthorized Page - 403</h1>
      </main>
    </PublicLayout>
  );
}
