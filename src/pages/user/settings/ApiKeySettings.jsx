import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";

export default function ApiKeySettings() {
  const { workbenchId } = useParams();

  return (
    <SettingsLayout title="Api Key Settings" description="Api Key Settings">
      <h1>Api Key Settings {workbenchId}</h1>
    </SettingsLayout>
  );
}
