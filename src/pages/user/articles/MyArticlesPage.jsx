import { Link } from "react-router-dom";
import UserLayout from "../../../layouts/UserLayout";

export default function MyArticlesPage() {
  return (
    <UserLayout title="My Articles Page" description="My Articles Page">
      <main className="mt-32 container mx-auto">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold">My Articles Page</h1>
          <Link to="/user/articles/add-new">New Article</Link>
        </div>
      </main>
    </UserLayout>
  );
}
