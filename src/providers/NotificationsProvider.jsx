import { useEffect } from "react";
import { useNotificationsStore } from "../lib/store/notifications";
import { useNotificationsSocket } from "../hooks/useNotificationsSocket";
import { useAuthStore } from "../lib/store/auth";

export default function NotificationsProvider({ children }) {
  const { fetchNotifications, addNotification } = useNotificationsStore();
  const { user } = useAuthStore();

  // todo=> unsuscribe?
  useEffect(() => {
    if (!user) return;
    fetchNotifications();
  }, [fetchNotifications, user]);

  useNotificationsSocket(user?.id, addNotification);

  return children;
}
