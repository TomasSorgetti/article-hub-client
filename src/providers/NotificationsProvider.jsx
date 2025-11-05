import { useEffect } from "react";
import { useNotificationStore } from "../lib/store/notifications";
import { useNotificationsSocket } from "../hooks/useNotificationsSocket";
import { useAuthStore } from "../lib/store/auth";

export default function NotificationsProvider({ children }) {
  const { fetchNotifications, addNotification } = useNotificationStore();
  const { user } = useAuthStore();

  // todo=> unsuscribe?
  useEffect(() => {
    if (!user) return;
    fetchNotifications();
  }, [fetchNotifications, user]);

  useNotificationsSocket(user?.id, addNotification);

  return children;
}
