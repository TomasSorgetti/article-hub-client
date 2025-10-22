import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function WebhooksSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout title="Webhooks Settings" description="Webhooks Settings">
      <h1>Webhooks Settings {workbenchId}</h1>
    </SettingsLayout>
  );
}
