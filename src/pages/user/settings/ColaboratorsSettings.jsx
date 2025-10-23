import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function ColaboratorsSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout
      title="Colaborators Settings"
      description="Colaborators Settings"
    >
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <h1>Colaborators Settings {workbenchId}</h1>
      </main>
    </SettingsLayout>
  );
}
