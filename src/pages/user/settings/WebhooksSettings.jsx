import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function WebhooksSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout
      title="Webhooks | Article Hub – Automate your workspace content workflows"
      description="Set up and manage webhooks to receive real-time events from your workspace. Keep your tools in sync and automate publishing, updates, and content tracking."
    >
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Webhooks Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
