import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function GeneralSettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout title="General Settings" description="General Settings">
      <h1>General Settings {workbenchId}</h1>
    </SettingsLayout>
  );
}
