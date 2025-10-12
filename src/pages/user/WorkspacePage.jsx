import { useParams } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";

export default function WorkspacePage() {
  const { workbenchId } = useParams();

  return (
    <UserLayout title="Workspaces Page" description="Workspaces Page">
      <h1 className="text-3xl font-bold">Workspaces Page</h1>
      <p className="mt-4 text-font-primary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quisquam
        placeat atque neque repudiandae adipisci aut? Laborum soluta non facere
        distinctio ipsam adipisci! Aliquid perspiciatis esse eum aspernatur,
        dolorum nostrum.
      </p>
    </UserLayout>
  );
}
