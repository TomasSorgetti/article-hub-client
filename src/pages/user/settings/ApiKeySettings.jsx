import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function ApiKeySettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout title="Api Key Settings" description="Api Key Settings">
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Api Key Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
