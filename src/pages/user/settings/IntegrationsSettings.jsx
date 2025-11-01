import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function IntegrationsSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout
      title="Integrations | Article Hub – Connect your workspace with external tools"
      description="Integrate your Article Hub workspace with external platforms and services. Automate publishing, analytics, and content delivery with powerful integrations."
    >
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Integrations Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
