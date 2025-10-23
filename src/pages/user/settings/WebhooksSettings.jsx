import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function WebhooksSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout title="Webhooks Settings" description="Webhooks Settings">
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Webhooks Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
