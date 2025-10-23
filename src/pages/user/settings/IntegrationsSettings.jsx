import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function IntegrationsSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout
      title="Integrations Settings"
      description="Integrations Settings"
    >
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Integrations Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
