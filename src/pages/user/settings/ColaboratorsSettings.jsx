import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function ColaboratorsSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout
      title="Collaborators | Article Hub – Manage your workspace team"
      description="Invite team members to your workspace, assign roles, and collaborate on content creation. Build and manage your blog together, all within Article Hub."
    >
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Colaborators Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
