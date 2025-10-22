import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function IntegrationsSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout
      title="Integrations Settings"
      description="Integrations Settings"
    >
      <h1>Integrations Settings {workbenchId}</h1>
    </SettingsLayout>
  );
}
