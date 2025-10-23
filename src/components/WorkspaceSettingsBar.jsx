import {
  Settings,
  Users,
  KeyRound,
  Webhook,
  Waypoints,
  ArrowLeft,
} from "lucide-react";
import SettingsListItem from "./ui/SettingsListItem";
import { Link, useParams } from "react-router-dom";

export default function WorkspaceSettingsBar() {
  const { workbenchId } = useParams();

  return (
    <aside className="p-4 min-w-60">
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to={`/user/articles/${workbenchId}`}
            className="flex items-center gap-2 text-font-secondary hover:text-font-primary"
          >
            <ArrowLeft />
            Go back
          </Link>
        </li>
        <li>
          <SettingsListItem
            to={`/user/settings/${workbenchId}/general`}
            text="General"
          >
            <Settings size={18} className="text-font-secondary" />
          </SettingsListItem>
        </li>

        <li className="border-t-[1px] border-border pt-2">
          <span className="ml-2 text-font-secondary">Access</span>
          <ul>
            <li>
              <SettingsListItem
                to={`/user/settings/${workbenchId}/colaborators`}
                text="Colaborators"
              >
                <Users size={18} className="text-font-secondary" />
              </SettingsListItem>
            </li>
          </ul>
        </li>
        <li className="border-t-[1px] border-border pt-2">
          <span className="ml-2 text-font-secondary">Security</span>
          <ul>
            <li>
              <SettingsListItem
                to={`/user/settings/${workbenchId}/api-key`}
                text="Api Key"
              >
                <KeyRound size={18} className="text-font-secondary" />
              </SettingsListItem>
            </li>
          </ul>
        </li>

        <li className="border-t-[1px] border-border pt-2">
          <span className="ml-2 text-font-secondary">Automation</span>
          <ul>
            <li>
              <SettingsListItem
                to={`/user/settings/${workbenchId}/webhooks`}
                text="Webhooks"
              >
                <Webhook size={18} className="text-font-secondary" />
              </SettingsListItem>
            </li>
            <li>
              <SettingsListItem
                to={`/user/settings/${workbenchId}/integrations`}
                text="Integrations"
              >
                <Waypoints size={18} className="text-font-secondary" />
              </SettingsListItem>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
