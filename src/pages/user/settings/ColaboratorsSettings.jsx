import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function ColaboratorsSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout title="Colaborators Settings" description="Colaborators Settings">
      <h1>Colaborators Settings {workbenchId}</h1>
    </SettingsLayout>
  );
}
