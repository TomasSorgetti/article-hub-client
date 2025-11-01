import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function ApiKeySettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout
      title="API Keys | Article Hub – Secure access for your workspace integrations"
      description="Manage your workspace’s API keys to connect Article Hub with your website or app. Control access, enable secure publishing, and keep your integrations safe."
    >
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Api Key Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
